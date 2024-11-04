import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../entity/User';
import { UserRepository } from '../repositories/UserRepository';
import { validateOrReject } from 'class-validator';
import sanitizeHtml from 'sanitize-html';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { RefreshToken } from '../entity/RefreshTokens';
import { JWT_SECRET, JWT_EXPIRATION, JWT_ALGORITHM } from '../constants';
import { getRepository } from 'typeorm';
import { getRedisClient } from '../redis'; // Import the Redis client

@Resolver()
export class UserResolver {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  private generateUniqueId(): number {
    return parseInt(uuidv4().replace(/-/g, ''), 16);
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    const redisClient = getRedisClient(); // Get Redis client
    const cacheKey = 'users'; // Key for caching user data

    // Try to get users from Redis cache
    const cachedUsers = await redisClient.get(cacheKey);
    if (cachedUsers) {
      return JSON.parse(cachedUsers); // Return cached data if available
    }

    // If not in cache, fetch from database
    const users = await this.userRepository.findAllUsers();
    
    // Store users in Redis cache
    await redisClient.set(cacheKey, JSON.stringify(users), 'EX', 3600); // Cache for 1 hour

    return users;
  }

  @Mutation(() => String)
  async createUser(
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
  ): Promise<String> {
    name = sanitizeHtml(name);
    email = sanitizeHtml(email);
    password = sanitizeHtml(password);
    const userId = this.generateUniqueId();
    const user = new User(userId, name, email, password);
    user.name = name;
    user.email = email;
    user.password = password;

    // Validate inputs
    await validateOrReject(user);

    const newUser = await this.userRepository.createUser(user.name, user.email, user.password);

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
      algorithm: JWT_ALGORITHM,
      expiresIn: JWT_EXPIRATION,
    });

    const refreshToken = new RefreshToken();
    refreshToken.token = uuidv4();
    refreshToken.user = newUser;
    await getRepository(RefreshToken).save(refreshToken);

    // Invalidate the cache when a new user is created
    const redisClient = getRedisClient();
    await redisClient.del('users'); // Clear the users cache

    return JSON.stringify({ token, refreshToken: refreshToken.token });
  }

  // Other mutations (updateUser, deleteUser) can be added similarly
}

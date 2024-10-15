import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../entity/User';
import { UserRepository } from '../repositories/UserRepository'; // Example of UserRepository; adjust as per your setup
import { validateOrReject } from 'class-validator';
import sanitizeHtml from 'sanitize-html';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { RefreshToken } from '../entity/RefreshTokens';
import { JWT_SECRET, JWT_EXPIRATION, JWT_ALGORITHM } from '../constants';
import { getRepository } from 'typeorm';


@Resolver()
export class UserResolver {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository(); // Example of UserRepository instantiation; adjust as per your setup
  }

  private generateUniqueId(): number {
    return parseInt(uuidv4().replace(/-/g, ''), 16);
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userRepository.findAllUsers();
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
    const user = new User(userId,name, email, password);
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


    return JSON.stringify({ token, refreshToken: refreshToken.token });
  }

  // Other mutations (updateUser, deleteUser) can be added similarly
}

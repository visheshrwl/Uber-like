import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository'; // Example of UserRepository; adjust as per your setup

@Resolver()
export class UserResolver {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository(); // Example of UserRepository instantiation; adjust as per your setup
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userRepository.findAllUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
  ): Promise<User> {
    const user = await this.userRepository.createUser(name, email, password);
    return user;
  }

  // Other mutations (updateUser, deleteUser) can be added similarly
}

import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../entity/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return User.find();
  }

  @Mutation(() => User)
  async createUser(@Arg("name") name: string) {
    const user = new User();
    user.name = name;
    await user.save();
    return user;
  }
}

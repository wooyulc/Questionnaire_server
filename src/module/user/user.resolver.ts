import { Args, Int, Query, Resolver,Mutation } from "@nestjs/graphql";
import { mockUsers } from "src/_mocks_/mockUsers";
import { User } from "src/Entity/User";
import { UpdateUserInput } from "src/graphql/user/user.update";
import { CreateUserInput } from "../../graphql/user/user.input";
import { UserService } from "src/module/user/user.service";
@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [User])
    async users(): Promise<User[]> {
        return this.userService.findAll();
    }
  
    @Query(() => User)
    async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
        return this.userService.findOne(id);
    }
  
    @Mutation(() => User)
    async createUser(@Args('data') data: CreateUserInput):  Promise<User> {
        return this.userService.create(data);
    }
  
    @Mutation(() => User)
    async updateUser(
        @Args('id', { type: () => Int }) id: number,
        @Args('data') data: UpdateUserInput): Promise<User> {
        return this.userService.update(id, data);
    }
  
    @Mutation(() => User)
    async removeUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
        try {
            const deletionResult = await this.userService.remove(id);
            
            // Handle deletion result here
        
            return deletionResult; // Make sure deletionResult is always a User object
          } catch (error) {
            throw new Error(`Failed to delete user with ID ${id}: ${error.message}`);
          }
        
    }
}


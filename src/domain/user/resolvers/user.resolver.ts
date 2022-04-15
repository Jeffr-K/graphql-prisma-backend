import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "../input/create-user.input";
import { DeleteUserInput } from "../input/delete-user.input";
import { UpdateUserInput } from "../input/update-user.input";
import { UserService } from "../services/user.service";

@Resolver('user')
export class UserResolver {
  
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  async create(@Args('createUserInput') data: CreateUserInput): Promise<CreateUserInput> {
    return this.userService.create(data);
  }
  
  @Mutation('deleteUser')
  async delete(@Args('deleteUserInput') data: DeleteUserInput): Promise<DeleteUserInput> {
    return this.userService.delete(data);
  }
  
  @Mutation('updateUser')
  async update(@Args('updateUserInput') data: UpdateUserInput): Promise<UpdateUserInput> {
    return this.userService.update(data);
  }

  @Query('searchUser')
  async get(@Args('id') id: number): Promise<unknown> {
    return this.userService.search(id);
  }

}
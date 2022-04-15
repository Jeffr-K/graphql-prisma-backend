import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "../input/create-user.input";
import { DeleteUserInput } from "../input/delete-user.input";
import { UpdateUserInput } from "../input/update-user.input";

@Injectable()
export class UserService {
  
  constructor() {}

  async create(data: CreateUserInput) {
    return new CreateUserInput()
  }
  
  async delete(data: DeleteUserInput) {
    return new DeleteUserInput()
  }
  
  async update(data: UpdateUserInput) {
    return new UpdateUserInput();
  }
  
  async search(id: number) {
    return 0;
  }

}
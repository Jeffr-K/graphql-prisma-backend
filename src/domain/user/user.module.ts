import { Module } from "@nestjs/common";
import { UserResolver } from "./resolvers/user.resolver";
import { UserService } from "./services/user.service";

@Module({
  imports: [],
  controllers: [UserResolver],
  providers: [UserService]
})
export class UserModule {}
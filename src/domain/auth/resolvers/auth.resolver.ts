import { Mutation, Resolver } from "@nestjs/graphql";

@Resolver()
export class AuthResolver {
  constructor() {}

  @Mutation()
  async login() {}
  
  @Mutation()
  async logout() {}
  
  @Mutation()
  async googleLogin() {}
  
  @Mutation()
  async facebookLogin() {}
  
  @Mutation()
  async kakaoLogin() {}
  
  @Mutation()
  async naverLogin() {}
  
}
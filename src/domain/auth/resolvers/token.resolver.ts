import { Mutation, Resolver } from "@nestjs/graphql";

@Resolver()
export class TokenResolver {
  constructor() {}
  
  @Mutation()
  async createToken() {}
  
  @Mutation()
  async removeToken() {}
  
  @Mutation()
  async updateToken() {}
  
}
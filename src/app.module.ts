import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DonationsModule } from './donations/donations.module';
import { GraphQLDateTime } from "graphql-iso-date";
import { UserModule } from './domain/user/user.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false,
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime }
    }),
    DonationsModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}



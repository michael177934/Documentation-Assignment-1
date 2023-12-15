/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Account } from "./Account";
import { AccountCountArgs } from "./AccountCountArgs";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountFindUniqueArgs } from "./AccountFindUniqueArgs";
import { CreateAccountArgs } from "./CreateAccountArgs";
import { UpdateAccountArgs } from "./UpdateAccountArgs";
import { DeleteAccountArgs } from "./DeleteAccountArgs";
import { Beneficiary } from "../../beneficiary/base/Beneficiary";
import { Notification } from "../../notification/base/Notification";
import { Transaction } from "../../transaction/base/Transaction";
import { User } from "../../user/base/User";
import { AccountService } from "../account.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Account)
export class AccountResolverBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async _accountsMeta(
    @graphql.Args() args: AccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Account])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async accounts(
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    return this.service.accounts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  async account(
    @graphql.Args() args: AccountFindUniqueArgs
  ): Promise<Account | null> {
    const result = await this.service.account(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  async createAccount(
    @graphql.Args() args: CreateAccountArgs
  ): Promise<Account> {
    return await this.service.createAccount({
      ...args,
      data: {
        ...args.data,

        beneficiaries: args.data.beneficiaries
          ? {
              connect: args.data.beneficiaries,
            }
          : undefined,

        notifications: args.data.notifications
          ? {
              connect: args.data.notifications,
            }
          : undefined,

        receiverAccountId: args.data.receiverAccountId
          ? {
              connect: args.data.receiverAccountId,
            }
          : undefined,

        transactions: args.data.transactions
          ? {
              connect: args.data.transactions,
            }
          : undefined,

        userId: {
          connect: args.data.userId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateAccount(
    @graphql.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.updateAccount({
        ...args,
        data: {
          ...args.data,

          beneficiaries: args.data.beneficiaries
            ? {
                connect: args.data.beneficiaries,
              }
            : undefined,

          notifications: args.data.notifications
            ? {
                connect: args.data.notifications,
              }
            : undefined,

          receiverAccountId: args.data.receiverAccountId
            ? {
                connect: args.data.receiverAccountId,
              }
            : undefined,

          transactions: args.data.transactions
            ? {
                connect: args.data.transactions,
              }
            : undefined,

          userId: {
            connect: args.data.userId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  async deleteAccount(
    @graphql.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Beneficiary, {
    nullable: true,
    name: "beneficiaries",
  })
  @nestAccessControl.UseRoles({
    resource: "Beneficiary",
    action: "read",
    possession: "any",
  })
  async getBeneficiaries(
    @graphql.Parent() parent: Account
  ): Promise<Beneficiary | null> {
    const result = await this.service.getBeneficiaries(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Notification, {
    nullable: true,
    name: "notifications",
  })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async getNotifications(
    @graphql.Parent() parent: Account
  ): Promise<Notification | null> {
    const result = await this.service.getNotifications(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Transaction, {
    nullable: true,
    name: "receiverAccountId",
  })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async getReceiverAccountId(
    @graphql.Parent() parent: Account
  ): Promise<Transaction | null> {
    const result = await this.service.getReceiverAccountId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Transaction, {
    nullable: true,
    name: "transactions",
  })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async getTransactions(
    @graphql.Parent() parent: Account
  ): Promise<Transaction | null> {
    const result = await this.service.getTransactions(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "userId",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUserId(@graphql.Parent() parent: Account): Promise<User | null> {
    const result = await this.service.getUserId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

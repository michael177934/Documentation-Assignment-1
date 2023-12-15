/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Transaction, // @ts-ignore
  Account,
} from "@prisma/client";

export class TransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TransactionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionCountArgs>
  ): Promise<number> {
    return this.prisma.transaction.count(args);
  }

  async transactions<T extends Prisma.TransactionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindManyArgs>
  ): Promise<Transaction[]> {
    return this.prisma.transaction.findMany(args);
  }
  async transaction<T extends Prisma.TransactionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindUniqueArgs>
  ): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique(args);
  }
  async createTransaction<T extends Prisma.TransactionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionCreateArgs>
  ): Promise<Transaction> {
    return this.prisma.transaction.create<T>(args);
  }
  async updateTransaction<T extends Prisma.TransactionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionUpdateArgs>
  ): Promise<Transaction> {
    return this.prisma.transaction.update<T>(args);
  }
  async deleteTransaction<T extends Prisma.TransactionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDeleteArgs>
  ): Promise<Transaction> {
    return this.prisma.transaction.delete(args);
  }

  async getReceiverAccountId(parentId: string): Promise<Account | null> {
    return this.prisma.transaction
      .findUnique({
        where: { id: parentId },
      })
      .receiverAccountId();
  }

  async getSenderAccountId(parentId: string): Promise<Account | null> {
    return this.prisma.transaction
      .findUnique({
        where: { id: parentId },
      })
      .senderAccountId();
  }
}

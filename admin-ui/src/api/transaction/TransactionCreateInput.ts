import { Decimal } from "decimal.js";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionCreateInput = {
  amount: Decimal;
  date?: Date | null;
  receiverAccountId: AccountWhereUniqueInput;
  senderAccountId: AccountWhereUniqueInput;
  status?: string | null;
  transactionType: string;
};

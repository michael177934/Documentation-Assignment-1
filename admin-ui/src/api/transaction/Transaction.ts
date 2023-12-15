import { Decimal } from "decimal.js";
import { Account } from "../account/Account";

export type Transaction = {
  amount: Decimal;
  createdAt: Date;
  date: Date | null;
  id: string;
  receiverAccountId?: Account;
  senderAccountId?: Account;
  status: string | null;
  transactionType: string;
  updatedAt: Date;
};

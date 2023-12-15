import { Account } from "../account/Account";

export type Beneficiary = {
  accountNumber: string;
  bankName: string | null;
  beneficiaryName: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: Account;
};

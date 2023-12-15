import { Beneficiary } from "../beneficiary/Beneficiary";
import { Notification } from "../notification/Notification";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Account = {
  accountNumber: string | null;
  accountType: string | null;
  balance: string | null;
  beneficiaries?: Beneficiary | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  notifications?: Notification | null;
  receiverAccountId?: Transaction | null;
  transactions?: Transaction | null;
  updatedAt: Date;
  userId?: User;
};

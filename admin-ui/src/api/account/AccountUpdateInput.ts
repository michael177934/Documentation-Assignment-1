import { BeneficiaryWhereUniqueInput } from "../beneficiary/BeneficiaryWhereUniqueInput";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  accountType?: string | null;
  balance?: string | null;
  beneficiaries?: BeneficiaryWhereUniqueInput | null;
  currency?: string | null;
  notifications?: NotificationWhereUniqueInput | null;
  receiverAccountId?: TransactionWhereUniqueInput | null;
  transactions?: TransactionWhereUniqueInput | null;
  userId?: UserWhereUniqueInput;
};

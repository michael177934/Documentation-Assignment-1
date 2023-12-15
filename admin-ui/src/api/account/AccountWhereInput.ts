import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BeneficiaryWhereUniqueInput } from "../beneficiary/BeneficiaryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  accountNumber?: StringNullableFilter;
  accountType?: StringNullableFilter;
  balance?: StringNullableFilter;
  beneficiaries?: BeneficiaryWhereUniqueInput;
  currency?: StringNullableFilter;
  id?: StringFilter;
  notifications?: NotificationWhereUniqueInput;
  receiverAccountId?: TransactionWhereUniqueInput;
  transactions?: TransactionWhereUniqueInput;
  userId?: UserWhereUniqueInput;
};

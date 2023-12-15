import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type BeneficiaryCreateInput = {
  accountNumber: string;
  bankName?: string | null;
  beneficiaryName: string;
  userId: AccountWhereUniqueInput;
};

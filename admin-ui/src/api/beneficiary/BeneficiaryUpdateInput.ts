import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type BeneficiaryUpdateInput = {
  accountNumber?: string;
  bankName?: string | null;
  beneficiaryName?: string;
  userId?: AccountWhereUniqueInput;
};

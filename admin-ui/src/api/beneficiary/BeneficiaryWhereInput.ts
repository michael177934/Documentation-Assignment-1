import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type BeneficiaryWhereInput = {
  accountNumber?: StringFilter;
  bankName?: StringNullableFilter;
  beneficiaryName?: StringFilter;
  id?: StringFilter;
  userId?: AccountWhereUniqueInput;
};

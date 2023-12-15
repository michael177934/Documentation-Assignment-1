import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  amount?: DecimalFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  receiverAccountId?: AccountWhereUniqueInput;
  senderAccountId?: AccountWhereUniqueInput;
  status?: StringNullableFilter;
  transactionType?: StringFilter;
};

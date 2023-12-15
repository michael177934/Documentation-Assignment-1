import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BillWhereInput = {
  amount?: DecimalNullableFilter;
  billType?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
};

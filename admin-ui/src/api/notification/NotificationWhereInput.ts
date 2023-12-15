import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type NotificationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  status?: StringNullableFilter;
  userId?: AccountWhereUniqueInput;
};

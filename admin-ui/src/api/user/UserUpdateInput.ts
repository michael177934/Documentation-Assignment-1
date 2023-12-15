import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accounts?: AccountWhereUniqueInput | null;
  address?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: number;
  roles?: InputJsonValue;
  username?: string;
};

import { Account } from "../account/Account";
import { JsonValue } from "type-fest";

export type User = {
  accounts?: Account | null;
  address: string;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: number;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

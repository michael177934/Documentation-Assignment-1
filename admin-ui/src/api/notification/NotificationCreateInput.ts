import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type NotificationCreateInput = {
  date?: Date | null;
  message?: string | null;
  status?: string | null;
  userId?: AccountWhereUniqueInput | null;
};

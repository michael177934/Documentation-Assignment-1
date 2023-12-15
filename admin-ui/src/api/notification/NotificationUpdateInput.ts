import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type NotificationUpdateInput = {
  date?: Date | null;
  message?: string | null;
  status?: string | null;
  userId?: AccountWhereUniqueInput | null;
};

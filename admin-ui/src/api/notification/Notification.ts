import { Account } from "../account/Account";

export type Notification = {
  createdAt: Date;
  date: Date | null;
  id: string;
  message: string | null;
  status: string | null;
  updatedAt: Date;
  userId?: Account | null;
};

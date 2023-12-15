import { Decimal } from "decimal.js";

export type Bill = {
  amount: Decimal | null;
  billType: string | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  status: string | null;
  updatedAt: Date;
};

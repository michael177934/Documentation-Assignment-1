import { Decimal } from "decimal.js";

export type BillCreateInput = {
  amount?: Decimal | null;
  billType?: string | null;
  dueDate?: Date | null;
  status?: string | null;
};

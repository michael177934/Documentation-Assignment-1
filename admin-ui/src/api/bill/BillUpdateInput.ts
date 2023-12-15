import { Decimal } from "decimal.js";

export type BillUpdateInput = {
  amount?: Decimal | null;
  billType?: string | null;
  dueDate?: Date | null;
  status?: string | null;
};

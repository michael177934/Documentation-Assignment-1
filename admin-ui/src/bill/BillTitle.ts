import { Bill as TBill } from "../api/bill/Bill";

export const BILL_TITLE_FIELD = "billType";

export const BillTitle = (record: TBill): string => {
  return record.billType?.toString() || String(record.id);
};

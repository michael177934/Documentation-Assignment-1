import { SortOrder } from "../../util/SortOrder";

export type BillOrderByInput = {
  amount?: SortOrder;
  billType?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

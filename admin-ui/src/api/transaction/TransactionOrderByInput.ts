import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  receiverAccountId?: SortOrder;
  senderAccountIdId?: SortOrder;
  status?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};

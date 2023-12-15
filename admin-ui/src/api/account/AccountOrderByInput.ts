import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  balance?: SortOrder;
  beneficiariesId?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  notificationsId?: SortOrder;
  receiverAccountIdId?: SortOrder;
  transactionsId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

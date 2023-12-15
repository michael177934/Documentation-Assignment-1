import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  us?: SortOrder;
};

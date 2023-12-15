import { SortOrder } from "../../util/SortOrder";

export type BeneficiaryOrderByInput = {
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  beneficiaryName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

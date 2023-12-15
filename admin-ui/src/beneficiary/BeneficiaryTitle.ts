import { Beneficiary as TBeneficiary } from "../api/beneficiary/Beneficiary";

export const BENEFICIARY_TITLE_FIELD = "bankName";

export const BeneficiaryTitle = (record: TBeneficiary): string => {
  return record.bankName?.toString() || String(record.id);
};

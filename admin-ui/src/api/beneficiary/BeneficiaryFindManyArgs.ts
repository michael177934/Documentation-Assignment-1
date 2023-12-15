import { BeneficiaryWhereInput } from "./BeneficiaryWhereInput";
import { BeneficiaryOrderByInput } from "./BeneficiaryOrderByInput";

export type BeneficiaryFindManyArgs = {
  where?: BeneficiaryWhereInput;
  orderBy?: Array<BeneficiaryOrderByInput>;
  skip?: number;
  take?: number;
};

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BeneficiaryModuleBase } from "./base/beneficiary.module.base";
import { BeneficiaryService } from "./beneficiary.service";
import { BeneficiaryController } from "./beneficiary.controller";
import { BeneficiaryResolver } from "./beneficiary.resolver";

@Module({
  imports: [BeneficiaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [BeneficiaryController],
  providers: [BeneficiaryService, BeneficiaryResolver],
  exports: [BeneficiaryService],
})
export class BeneficiaryModule {}

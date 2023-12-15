import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BeneficiaryService } from "./beneficiary.service";
import { BeneficiaryControllerBase } from "./base/beneficiary.controller.base";

@swagger.ApiTags("beneficiaries")
@common.Controller("beneficiaries")
export class BeneficiaryController extends BeneficiaryControllerBase {
  constructor(
    protected readonly service: BeneficiaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

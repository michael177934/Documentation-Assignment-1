import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BeneficiaryResolverBase } from "./base/beneficiary.resolver.base";
import { Beneficiary } from "./base/Beneficiary";
import { BeneficiaryService } from "./beneficiary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Beneficiary)
export class BeneficiaryResolver extends BeneficiaryResolverBase {
  constructor(
    protected readonly service: BeneficiaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

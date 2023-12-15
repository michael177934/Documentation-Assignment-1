import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BeneficiaryServiceBase } from "./base/beneficiary.service.base";

@Injectable()
export class BeneficiaryService extends BeneficiaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DemographyServiceBase } from "./base/demography.service.base";

@Injectable()
export class DemographyService extends DemographyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

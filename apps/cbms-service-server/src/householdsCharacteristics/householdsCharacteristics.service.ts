import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HouseholdsCharacteristicsServiceBase } from "./base/householdsCharacteristics.service.base";

@Injectable()
export class HouseholdsCharacteristicsService extends HouseholdsCharacteristicsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

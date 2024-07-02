import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthAndOtherCharacteristicsServiceBase } from "./base/healthAndOtherCharacteristics.service.base";

@Injectable()
export class HealthAndOtherCharacteristicsService extends HealthAndOtherCharacteristicsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

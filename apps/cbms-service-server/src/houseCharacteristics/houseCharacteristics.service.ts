import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HouseCharacteristicsServiceBase } from "./base/houseCharacteristics.service.base";

@Injectable()
export class HouseCharacteristicsService extends HouseCharacteristicsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

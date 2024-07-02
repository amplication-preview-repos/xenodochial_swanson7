import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgricultureFarmingServiceBase } from "./base/agricultureFarming.service.base";

@Injectable()
export class AgricultureFarmingService extends AgricultureFarmingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

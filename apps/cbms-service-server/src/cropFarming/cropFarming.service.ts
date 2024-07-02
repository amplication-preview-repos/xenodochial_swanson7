import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CropFarmingServiceBase } from "./base/cropFarming.service.base";

@Injectable()
export class CropFarmingService extends CropFarmingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

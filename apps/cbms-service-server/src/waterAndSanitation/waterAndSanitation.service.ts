import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterAndSanitationServiceBase } from "./base/waterAndSanitation.service.base";

@Injectable()
export class WaterAndSanitationService extends WaterAndSanitationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

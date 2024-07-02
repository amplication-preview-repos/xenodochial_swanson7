import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClimateServiceBase } from "./base/climate.service.base";

@Injectable()
export class ClimateService extends ClimateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

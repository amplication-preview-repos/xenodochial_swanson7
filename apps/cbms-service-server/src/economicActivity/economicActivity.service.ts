import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EconomicActivityServiceBase } from "./base/economicActivity.service.base";

@Injectable()
export class EconomicActivityService extends EconomicActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

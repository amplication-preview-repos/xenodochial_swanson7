import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HousingServiceBase } from "./base/housing.service.base";

@Injectable()
export class HousingService extends HousingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

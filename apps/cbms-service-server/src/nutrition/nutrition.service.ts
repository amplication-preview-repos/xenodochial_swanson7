import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NutritionServiceBase } from "./base/nutrition.service.base";

@Injectable()
export class NutritionService extends NutritionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

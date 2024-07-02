import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OtherSourceOfIncomeServiceBase } from "./base/otherSourceOfIncome.service.base";

@Injectable()
export class OtherSourceOfIncomeService extends OtherSourceOfIncomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

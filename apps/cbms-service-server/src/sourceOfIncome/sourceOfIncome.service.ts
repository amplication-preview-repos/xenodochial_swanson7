import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SourceOfIncomeServiceBase } from "./base/sourceOfIncome.service.base";

@Injectable()
export class SourceOfIncomeService extends SourceOfIncomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

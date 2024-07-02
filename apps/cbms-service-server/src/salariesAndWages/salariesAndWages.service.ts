import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalariesAndWagesServiceBase } from "./base/salariesAndWages.service.base";

@Injectable()
export class SalariesAndWagesService extends SalariesAndWagesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

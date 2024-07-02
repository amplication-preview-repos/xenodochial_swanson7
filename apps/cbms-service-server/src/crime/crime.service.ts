import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrimeServiceBase } from "./base/crime.service.base";

@Injectable()
export class CrimeService extends CrimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

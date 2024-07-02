import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdentificationServiceBase } from "./base/identification.service.base";

@Injectable()
export class IdentificationService extends IdentificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

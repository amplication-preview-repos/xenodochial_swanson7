import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EducationAndLiteracyServiceBase } from "./base/educationAndLiteracy.service.base";

@Injectable()
export class EducationAndLiteracyService extends EducationAndLiteracyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

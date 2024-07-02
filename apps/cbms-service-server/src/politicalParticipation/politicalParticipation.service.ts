import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PoliticalParticipationServiceBase } from "./base/politicalParticipation.service.base";

@Injectable()
export class PoliticalParticipationService extends PoliticalParticipationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

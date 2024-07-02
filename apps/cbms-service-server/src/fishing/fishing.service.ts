import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FishingServiceBase } from "./base/fishing.service.base";

@Injectable()
export class FishingService extends FishingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

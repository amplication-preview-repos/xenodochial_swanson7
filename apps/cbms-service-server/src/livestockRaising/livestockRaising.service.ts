import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LivestockRaisingServiceBase } from "./base/livestockRaising.service.base";

@Injectable()
export class LivestockRaisingService extends LivestockRaisingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

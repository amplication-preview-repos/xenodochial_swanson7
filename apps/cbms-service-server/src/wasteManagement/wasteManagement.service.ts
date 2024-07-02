import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WasteManagementServiceBase } from "./base/wasteManagement.service.base";

@Injectable()
export class WasteManagementService extends WasteManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

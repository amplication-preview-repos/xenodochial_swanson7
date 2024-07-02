import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WasteManagementModuleBase } from "./base/wasteManagement.module.base";
import { WasteManagementService } from "./wasteManagement.service";
import { WasteManagementController } from "./wasteManagement.controller";
import { WasteManagementResolver } from "./wasteManagement.resolver";

@Module({
  imports: [WasteManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [WasteManagementController],
  providers: [WasteManagementService, WasteManagementResolver],
  exports: [WasteManagementService],
})
export class WasteManagementModule {}

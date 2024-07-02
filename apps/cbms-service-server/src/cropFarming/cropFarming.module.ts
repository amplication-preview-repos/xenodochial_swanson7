import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CropFarmingModuleBase } from "./base/cropFarming.module.base";
import { CropFarmingService } from "./cropFarming.service";
import { CropFarmingController } from "./cropFarming.controller";
import { CropFarmingResolver } from "./cropFarming.resolver";

@Module({
  imports: [CropFarmingModuleBase, forwardRef(() => AuthModule)],
  controllers: [CropFarmingController],
  providers: [CropFarmingService, CropFarmingResolver],
  exports: [CropFarmingService],
})
export class CropFarmingModule {}

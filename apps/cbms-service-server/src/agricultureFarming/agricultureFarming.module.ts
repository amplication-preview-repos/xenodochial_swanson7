import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgricultureFarmingModuleBase } from "./base/agricultureFarming.module.base";
import { AgricultureFarmingService } from "./agricultureFarming.service";
import { AgricultureFarmingController } from "./agricultureFarming.controller";
import { AgricultureFarmingResolver } from "./agricultureFarming.resolver";

@Module({
  imports: [AgricultureFarmingModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgricultureFarmingController],
  providers: [AgricultureFarmingService, AgricultureFarmingResolver],
  exports: [AgricultureFarmingService],
})
export class AgricultureFarmingModule {}

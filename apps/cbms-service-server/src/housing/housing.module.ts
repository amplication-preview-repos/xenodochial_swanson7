import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HousingModuleBase } from "./base/housing.module.base";
import { HousingService } from "./housing.service";
import { HousingController } from "./housing.controller";
import { HousingResolver } from "./housing.resolver";

@Module({
  imports: [HousingModuleBase, forwardRef(() => AuthModule)],
  controllers: [HousingController],
  providers: [HousingService, HousingResolver],
  exports: [HousingService],
})
export class HousingModule {}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClimateModuleBase } from "./base/climate.module.base";
import { ClimateService } from "./climate.service";
import { ClimateController } from "./climate.controller";
import { ClimateResolver } from "./climate.resolver";

@Module({
  imports: [ClimateModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClimateController],
  providers: [ClimateService, ClimateResolver],
  exports: [ClimateService],
})
export class ClimateModule {}

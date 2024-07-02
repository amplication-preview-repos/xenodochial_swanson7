import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EconomicActivityModuleBase } from "./base/economicActivity.module.base";
import { EconomicActivityService } from "./economicActivity.service";
import { EconomicActivityController } from "./economicActivity.controller";
import { EconomicActivityResolver } from "./economicActivity.resolver";

@Module({
  imports: [EconomicActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [EconomicActivityController],
  providers: [EconomicActivityService, EconomicActivityResolver],
  exports: [EconomicActivityService],
})
export class EconomicActivityModule {}

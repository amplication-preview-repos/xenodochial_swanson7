import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HouseholdsCharacteristicsModuleBase } from "./base/householdsCharacteristics.module.base";
import { HouseholdsCharacteristicsService } from "./householdsCharacteristics.service";
import { HouseholdsCharacteristicsController } from "./householdsCharacteristics.controller";
import { HouseholdsCharacteristicsResolver } from "./householdsCharacteristics.resolver";

@Module({
  imports: [HouseholdsCharacteristicsModuleBase, forwardRef(() => AuthModule)],
  controllers: [HouseholdsCharacteristicsController],
  providers: [
    HouseholdsCharacteristicsService,
    HouseholdsCharacteristicsResolver,
  ],
  exports: [HouseholdsCharacteristicsService],
})
export class HouseholdsCharacteristicsModule {}

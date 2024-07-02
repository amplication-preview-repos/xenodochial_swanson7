import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HealthAndOtherCharacteristicsModuleBase } from "./base/healthAndOtherCharacteristics.module.base";
import { HealthAndOtherCharacteristicsService } from "./healthAndOtherCharacteristics.service";
import { HealthAndOtherCharacteristicsController } from "./healthAndOtherCharacteristics.controller";
import { HealthAndOtherCharacteristicsResolver } from "./healthAndOtherCharacteristics.resolver";

@Module({
  imports: [
    HealthAndOtherCharacteristicsModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [HealthAndOtherCharacteristicsController],
  providers: [
    HealthAndOtherCharacteristicsService,
    HealthAndOtherCharacteristicsResolver,
  ],
  exports: [HealthAndOtherCharacteristicsService],
})
export class HealthAndOtherCharacteristicsModule {}

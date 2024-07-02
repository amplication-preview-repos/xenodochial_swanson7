import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HouseCharacteristicsModuleBase } from "./base/houseCharacteristics.module.base";
import { HouseCharacteristicsService } from "./houseCharacteristics.service";
import { HouseCharacteristicsController } from "./houseCharacteristics.controller";
import { HouseCharacteristicsResolver } from "./houseCharacteristics.resolver";

@Module({
  imports: [HouseCharacteristicsModuleBase, forwardRef(() => AuthModule)],
  controllers: [HouseCharacteristicsController],
  providers: [HouseCharacteristicsService, HouseCharacteristicsResolver],
  exports: [HouseCharacteristicsService],
})
export class HouseCharacteristicsModule {}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaterAndSanitationModuleBase } from "./base/waterAndSanitation.module.base";
import { WaterAndSanitationService } from "./waterAndSanitation.service";
import { WaterAndSanitationController } from "./waterAndSanitation.controller";
import { WaterAndSanitationResolver } from "./waterAndSanitation.resolver";

@Module({
  imports: [WaterAndSanitationModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaterAndSanitationController],
  providers: [WaterAndSanitationService, WaterAndSanitationResolver],
  exports: [WaterAndSanitationService],
})
export class WaterAndSanitationModule {}

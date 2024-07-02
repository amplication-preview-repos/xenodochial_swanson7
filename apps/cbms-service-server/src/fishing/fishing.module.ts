import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FishingModuleBase } from "./base/fishing.module.base";
import { FishingService } from "./fishing.service";
import { FishingController } from "./fishing.controller";
import { FishingResolver } from "./fishing.resolver";

@Module({
  imports: [FishingModuleBase, forwardRef(() => AuthModule)],
  controllers: [FishingController],
  providers: [FishingService, FishingResolver],
  exports: [FishingService],
})
export class FishingModule {}

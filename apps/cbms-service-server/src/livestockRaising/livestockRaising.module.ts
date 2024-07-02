import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LivestockRaisingModuleBase } from "./base/livestockRaising.module.base";
import { LivestockRaisingService } from "./livestockRaising.service";
import { LivestockRaisingController } from "./livestockRaising.controller";
import { LivestockRaisingResolver } from "./livestockRaising.resolver";

@Module({
  imports: [LivestockRaisingModuleBase, forwardRef(() => AuthModule)],
  controllers: [LivestockRaisingController],
  providers: [LivestockRaisingService, LivestockRaisingResolver],
  exports: [LivestockRaisingService],
})
export class LivestockRaisingModule {}

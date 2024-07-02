import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DemographyModuleBase } from "./base/demography.module.base";
import { DemographyService } from "./demography.service";
import { DemographyController } from "./demography.controller";
import { DemographyResolver } from "./demography.resolver";

@Module({
  imports: [DemographyModuleBase, forwardRef(() => AuthModule)],
  controllers: [DemographyController],
  providers: [DemographyService, DemographyResolver],
  exports: [DemographyService],
})
export class DemographyModule {}

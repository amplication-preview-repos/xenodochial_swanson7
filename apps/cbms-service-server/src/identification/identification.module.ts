import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IdentificationModuleBase } from "./base/identification.module.base";
import { IdentificationService } from "./identification.service";
import { IdentificationController } from "./identification.controller";
import { IdentificationResolver } from "./identification.resolver";

@Module({
  imports: [IdentificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [IdentificationController],
  providers: [IdentificationService, IdentificationResolver],
  exports: [IdentificationService],
})
export class IdentificationModule {}

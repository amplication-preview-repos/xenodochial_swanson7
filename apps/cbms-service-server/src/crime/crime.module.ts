import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CrimeModuleBase } from "./base/crime.module.base";
import { CrimeService } from "./crime.service";
import { CrimeController } from "./crime.controller";
import { CrimeResolver } from "./crime.resolver";

@Module({
  imports: [CrimeModuleBase, forwardRef(() => AuthModule)],
  controllers: [CrimeController],
  providers: [CrimeService, CrimeResolver],
  exports: [CrimeService],
})
export class CrimeModule {}

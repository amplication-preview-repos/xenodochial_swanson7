import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalariesAndWagesModuleBase } from "./base/salariesAndWages.module.base";
import { SalariesAndWagesService } from "./salariesAndWages.service";
import { SalariesAndWagesController } from "./salariesAndWages.controller";
import { SalariesAndWagesResolver } from "./salariesAndWages.resolver";

@Module({
  imports: [SalariesAndWagesModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalariesAndWagesController],
  providers: [SalariesAndWagesService, SalariesAndWagesResolver],
  exports: [SalariesAndWagesService],
})
export class SalariesAndWagesModule {}

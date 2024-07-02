import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SourceOfIncomeModuleBase } from "./base/sourceOfIncome.module.base";
import { SourceOfIncomeService } from "./sourceOfIncome.service";
import { SourceOfIncomeController } from "./sourceOfIncome.controller";
import { SourceOfIncomeResolver } from "./sourceOfIncome.resolver";

@Module({
  imports: [SourceOfIncomeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SourceOfIncomeController],
  providers: [SourceOfIncomeService, SourceOfIncomeResolver],
  exports: [SourceOfIncomeService],
})
export class SourceOfIncomeModule {}

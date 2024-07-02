import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OtherSourceOfIncomeModuleBase } from "./base/otherSourceOfIncome.module.base";
import { OtherSourceOfIncomeService } from "./otherSourceOfIncome.service";
import { OtherSourceOfIncomeController } from "./otherSourceOfIncome.controller";
import { OtherSourceOfIncomeResolver } from "./otherSourceOfIncome.resolver";

@Module({
  imports: [OtherSourceOfIncomeModuleBase, forwardRef(() => AuthModule)],
  controllers: [OtherSourceOfIncomeController],
  providers: [OtherSourceOfIncomeService, OtherSourceOfIncomeResolver],
  exports: [OtherSourceOfIncomeService],
})
export class OtherSourceOfIncomeModule {}

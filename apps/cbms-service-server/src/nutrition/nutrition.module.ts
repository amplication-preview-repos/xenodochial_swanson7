import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NutritionModuleBase } from "./base/nutrition.module.base";
import { NutritionService } from "./nutrition.service";
import { NutritionController } from "./nutrition.controller";
import { NutritionResolver } from "./nutrition.resolver";

@Module({
  imports: [NutritionModuleBase, forwardRef(() => AuthModule)],
  controllers: [NutritionController],
  providers: [NutritionService, NutritionResolver],
  exports: [NutritionService],
})
export class NutritionModule {}

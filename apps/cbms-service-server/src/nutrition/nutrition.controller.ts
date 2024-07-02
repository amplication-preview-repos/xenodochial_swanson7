import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NutritionService } from "./nutrition.service";
import { NutritionControllerBase } from "./base/nutrition.controller.base";

@swagger.ApiTags("nutritions")
@common.Controller("nutritions")
export class NutritionController extends NutritionControllerBase {
  constructor(
    protected readonly service: NutritionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EconomicActivityService } from "./economicActivity.service";
import { EconomicActivityControllerBase } from "./base/economicActivity.controller.base";

@swagger.ApiTags("economicActivities")
@common.Controller("economicActivities")
export class EconomicActivityController extends EconomicActivityControllerBase {
  constructor(
    protected readonly service: EconomicActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

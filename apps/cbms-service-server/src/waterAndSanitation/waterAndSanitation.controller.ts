import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WaterAndSanitationService } from "./waterAndSanitation.service";
import { WaterAndSanitationControllerBase } from "./base/waterAndSanitation.controller.base";

@swagger.ApiTags("waterAndSanitations")
@common.Controller("waterAndSanitations")
export class WaterAndSanitationController extends WaterAndSanitationControllerBase {
  constructor(
    protected readonly service: WaterAndSanitationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

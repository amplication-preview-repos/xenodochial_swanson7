import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HousingService } from "./housing.service";
import { HousingControllerBase } from "./base/housing.controller.base";

@swagger.ApiTags("housings")
@common.Controller("housings")
export class HousingController extends HousingControllerBase {
  constructor(
    protected readonly service: HousingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

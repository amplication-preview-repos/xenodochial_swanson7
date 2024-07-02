import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClimateService } from "./climate.service";
import { ClimateControllerBase } from "./base/climate.controller.base";

@swagger.ApiTags("climates")
@common.Controller("climates")
export class ClimateController extends ClimateControllerBase {
  constructor(
    protected readonly service: ClimateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

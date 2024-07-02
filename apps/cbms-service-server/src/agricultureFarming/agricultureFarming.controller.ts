import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AgricultureFarmingService } from "./agricultureFarming.service";
import { AgricultureFarmingControllerBase } from "./base/agricultureFarming.controller.base";

@swagger.ApiTags("agricultureFarmings")
@common.Controller("agricultureFarmings")
export class AgricultureFarmingController extends AgricultureFarmingControllerBase {
  constructor(
    protected readonly service: AgricultureFarmingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

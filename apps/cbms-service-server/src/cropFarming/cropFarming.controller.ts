import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CropFarmingService } from "./cropFarming.service";
import { CropFarmingControllerBase } from "./base/cropFarming.controller.base";

@swagger.ApiTags("cropFarmings")
@common.Controller("cropFarmings")
export class CropFarmingController extends CropFarmingControllerBase {
  constructor(
    protected readonly service: CropFarmingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

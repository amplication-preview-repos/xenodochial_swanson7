import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WasteManagementService } from "./wasteManagement.service";
import { WasteManagementControllerBase } from "./base/wasteManagement.controller.base";

@swagger.ApiTags("wasteManagements")
@common.Controller("wasteManagements")
export class WasteManagementController extends WasteManagementControllerBase {
  constructor(
    protected readonly service: WasteManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

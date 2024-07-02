import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LivestockRaisingService } from "./livestockRaising.service";
import { LivestockRaisingControllerBase } from "./base/livestockRaising.controller.base";

@swagger.ApiTags("livestockRaisings")
@common.Controller("livestockRaisings")
export class LivestockRaisingController extends LivestockRaisingControllerBase {
  constructor(
    protected readonly service: LivestockRaisingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

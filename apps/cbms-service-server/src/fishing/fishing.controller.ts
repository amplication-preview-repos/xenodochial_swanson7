import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FishingService } from "./fishing.service";
import { FishingControllerBase } from "./base/fishing.controller.base";

@swagger.ApiTags("fishings")
@common.Controller("fishings")
export class FishingController extends FishingControllerBase {
  constructor(
    protected readonly service: FishingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

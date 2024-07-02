import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DemographyService } from "./demography.service";
import { DemographyControllerBase } from "./base/demography.controller.base";

@swagger.ApiTags("demographies")
@common.Controller("demographies")
export class DemographyController extends DemographyControllerBase {
  constructor(
    protected readonly service: DemographyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

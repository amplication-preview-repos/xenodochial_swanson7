import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HouseholdsCharacteristicsService } from "./householdsCharacteristics.service";
import { HouseholdsCharacteristicsControllerBase } from "./base/householdsCharacteristics.controller.base";

@swagger.ApiTags("householdsCharacteristics")
@common.Controller("householdsCharacteristics")
export class HouseholdsCharacteristicsController extends HouseholdsCharacteristicsControllerBase {
  constructor(
    protected readonly service: HouseholdsCharacteristicsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

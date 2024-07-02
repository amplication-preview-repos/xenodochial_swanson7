import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HealthAndOtherCharacteristicsService } from "./healthAndOtherCharacteristics.service";
import { HealthAndOtherCharacteristicsControllerBase } from "./base/healthAndOtherCharacteristics.controller.base";

@swagger.ApiTags("healthAndOtherCharacteristics")
@common.Controller("healthAndOtherCharacteristics")
export class HealthAndOtherCharacteristicsController extends HealthAndOtherCharacteristicsControllerBase {
  constructor(
    protected readonly service: HealthAndOtherCharacteristicsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

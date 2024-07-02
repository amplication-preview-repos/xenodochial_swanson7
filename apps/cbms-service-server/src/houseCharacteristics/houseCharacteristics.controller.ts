import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HouseCharacteristicsService } from "./houseCharacteristics.service";
import { HouseCharacteristicsControllerBase } from "./base/houseCharacteristics.controller.base";

@swagger.ApiTags("houseCharacteristics")
@common.Controller("houseCharacteristics")
export class HouseCharacteristicsController extends HouseCharacteristicsControllerBase {
  constructor(
    protected readonly service: HouseCharacteristicsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

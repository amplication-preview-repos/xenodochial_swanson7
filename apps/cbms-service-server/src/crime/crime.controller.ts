import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CrimeService } from "./crime.service";
import { CrimeControllerBase } from "./base/crime.controller.base";

@swagger.ApiTags("crimes")
@common.Controller("crimes")
export class CrimeController extends CrimeControllerBase {
  constructor(
    protected readonly service: CrimeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

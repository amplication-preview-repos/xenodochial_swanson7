import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalariesAndWagesService } from "./salariesAndWages.service";
import { SalariesAndWagesControllerBase } from "./base/salariesAndWages.controller.base";

@swagger.ApiTags("salariesAndWages")
@common.Controller("salariesAndWages")
export class SalariesAndWagesController extends SalariesAndWagesControllerBase {
  constructor(
    protected readonly service: SalariesAndWagesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

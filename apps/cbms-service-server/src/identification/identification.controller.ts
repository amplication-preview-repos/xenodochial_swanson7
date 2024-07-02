import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IdentificationService } from "./identification.service";
import { IdentificationControllerBase } from "./base/identification.controller.base";

@swagger.ApiTags("identifications")
@common.Controller("identifications")
export class IdentificationController extends IdentificationControllerBase {
  constructor(
    protected readonly service: IdentificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

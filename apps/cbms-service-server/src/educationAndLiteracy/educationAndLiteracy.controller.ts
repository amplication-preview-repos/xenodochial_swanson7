import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EducationAndLiteracyService } from "./educationAndLiteracy.service";
import { EducationAndLiteracyControllerBase } from "./base/educationAndLiteracy.controller.base";

@swagger.ApiTags("educationAndLiteracies")
@common.Controller("educationAndLiteracies")
export class EducationAndLiteracyController extends EducationAndLiteracyControllerBase {
  constructor(
    protected readonly service: EducationAndLiteracyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

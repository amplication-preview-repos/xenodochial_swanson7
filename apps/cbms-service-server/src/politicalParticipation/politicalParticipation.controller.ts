import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PoliticalParticipationService } from "./politicalParticipation.service";
import { PoliticalParticipationControllerBase } from "./base/politicalParticipation.controller.base";

@swagger.ApiTags("politicalParticipations")
@common.Controller("politicalParticipations")
export class PoliticalParticipationController extends PoliticalParticipationControllerBase {
  constructor(
    protected readonly service: PoliticalParticipationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

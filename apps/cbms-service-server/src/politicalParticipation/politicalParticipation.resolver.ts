import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PoliticalParticipationResolverBase } from "./base/politicalParticipation.resolver.base";
import { PoliticalParticipation } from "./base/PoliticalParticipation";
import { PoliticalParticipationService } from "./politicalParticipation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PoliticalParticipation)
export class PoliticalParticipationResolver extends PoliticalParticipationResolverBase {
  constructor(
    protected readonly service: PoliticalParticipationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LivestockRaisingResolverBase } from "./base/livestockRaising.resolver.base";
import { LivestockRaising } from "./base/LivestockRaising";
import { LivestockRaisingService } from "./livestockRaising.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LivestockRaising)
export class LivestockRaisingResolver extends LivestockRaisingResolverBase {
  constructor(
    protected readonly service: LivestockRaisingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

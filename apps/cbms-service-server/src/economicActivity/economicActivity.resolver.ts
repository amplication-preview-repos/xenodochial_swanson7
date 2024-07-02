import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EconomicActivityResolverBase } from "./base/economicActivity.resolver.base";
import { EconomicActivity } from "./base/EconomicActivity";
import { EconomicActivityService } from "./economicActivity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EconomicActivity)
export class EconomicActivityResolver extends EconomicActivityResolverBase {
  constructor(
    protected readonly service: EconomicActivityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

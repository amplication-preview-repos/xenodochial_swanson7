import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AgricultureFarmingResolverBase } from "./base/agricultureFarming.resolver.base";
import { AgricultureFarming } from "./base/AgricultureFarming";
import { AgricultureFarmingService } from "./agricultureFarming.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AgricultureFarming)
export class AgricultureFarmingResolver extends AgricultureFarmingResolverBase {
  constructor(
    protected readonly service: AgricultureFarmingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HouseholdsCharacteristicsResolverBase } from "./base/householdsCharacteristics.resolver.base";
import { HouseholdsCharacteristics } from "./base/HouseholdsCharacteristics";
import { HouseholdsCharacteristicsService } from "./householdsCharacteristics.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HouseholdsCharacteristics)
export class HouseholdsCharacteristicsResolver extends HouseholdsCharacteristicsResolverBase {
  constructor(
    protected readonly service: HouseholdsCharacteristicsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

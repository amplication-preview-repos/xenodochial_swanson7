import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HouseCharacteristicsResolverBase } from "./base/houseCharacteristics.resolver.base";
import { HouseCharacteristics } from "./base/HouseCharacteristics";
import { HouseCharacteristicsService } from "./houseCharacteristics.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HouseCharacteristics)
export class HouseCharacteristicsResolver extends HouseCharacteristicsResolverBase {
  constructor(
    protected readonly service: HouseCharacteristicsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

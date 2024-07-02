import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WaterAndSanitationResolverBase } from "./base/waterAndSanitation.resolver.base";
import { WaterAndSanitation } from "./base/WaterAndSanitation";
import { WaterAndSanitationService } from "./waterAndSanitation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WaterAndSanitation)
export class WaterAndSanitationResolver extends WaterAndSanitationResolverBase {
  constructor(
    protected readonly service: WaterAndSanitationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

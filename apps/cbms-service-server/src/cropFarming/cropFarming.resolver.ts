import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CropFarmingResolverBase } from "./base/cropFarming.resolver.base";
import { CropFarming } from "./base/CropFarming";
import { CropFarmingService } from "./cropFarming.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CropFarming)
export class CropFarmingResolver extends CropFarmingResolverBase {
  constructor(
    protected readonly service: CropFarmingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

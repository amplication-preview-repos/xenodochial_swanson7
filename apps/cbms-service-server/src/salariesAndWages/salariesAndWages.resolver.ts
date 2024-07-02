import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalariesAndWagesResolverBase } from "./base/salariesAndWages.resolver.base";
import { SalariesAndWages } from "./base/SalariesAndWages";
import { SalariesAndWagesService } from "./salariesAndWages.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalariesAndWages)
export class SalariesAndWagesResolver extends SalariesAndWagesResolverBase {
  constructor(
    protected readonly service: SalariesAndWagesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

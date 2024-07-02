import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SourceOfIncomeResolverBase } from "./base/sourceOfIncome.resolver.base";
import { SourceOfIncome } from "./base/SourceOfIncome";
import { SourceOfIncomeService } from "./sourceOfIncome.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SourceOfIncome)
export class SourceOfIncomeResolver extends SourceOfIncomeResolverBase {
  constructor(
    protected readonly service: SourceOfIncomeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

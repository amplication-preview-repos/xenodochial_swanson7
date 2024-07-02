import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OtherSourceOfIncomeResolverBase } from "./base/otherSourceOfIncome.resolver.base";
import { OtherSourceOfIncome } from "./base/OtherSourceOfIncome";
import { OtherSourceOfIncomeService } from "./otherSourceOfIncome.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OtherSourceOfIncome)
export class OtherSourceOfIncomeResolver extends OtherSourceOfIncomeResolverBase {
  constructor(
    protected readonly service: OtherSourceOfIncomeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

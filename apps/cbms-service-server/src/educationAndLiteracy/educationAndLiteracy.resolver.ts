import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EducationAndLiteracyResolverBase } from "./base/educationAndLiteracy.resolver.base";
import { EducationAndLiteracy } from "./base/EducationAndLiteracy";
import { EducationAndLiteracyService } from "./educationAndLiteracy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EducationAndLiteracy)
export class EducationAndLiteracyResolver extends EducationAndLiteracyResolverBase {
  constructor(
    protected readonly service: EducationAndLiteracyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

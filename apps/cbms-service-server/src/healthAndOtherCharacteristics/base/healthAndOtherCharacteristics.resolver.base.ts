/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { HealthAndOtherCharacteristics } from "./HealthAndOtherCharacteristics";
import { HealthAndOtherCharacteristicsCountArgs } from "./HealthAndOtherCharacteristicsCountArgs";
import { HealthAndOtherCharacteristicsFindManyArgs } from "./HealthAndOtherCharacteristicsFindManyArgs";
import { HealthAndOtherCharacteristicsFindUniqueArgs } from "./HealthAndOtherCharacteristicsFindUniqueArgs";
import { CreateHealthAndOtherCharacteristicsArgs } from "./CreateHealthAndOtherCharacteristicsArgs";
import { UpdateHealthAndOtherCharacteristicsArgs } from "./UpdateHealthAndOtherCharacteristicsArgs";
import { DeleteHealthAndOtherCharacteristicsArgs } from "./DeleteHealthAndOtherCharacteristicsArgs";
import { HealthAndOtherCharacteristicsService } from "../healthAndOtherCharacteristics.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HealthAndOtherCharacteristics)
export class HealthAndOtherCharacteristicsResolverBase {
  constructor(
    protected readonly service: HealthAndOtherCharacteristicsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HealthAndOtherCharacteristics",
    action: "read",
    possession: "any",
  })
  async _healthAndOtherCharacteristicsItemsMeta(
    @graphql.Args() args: HealthAndOtherCharacteristicsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [HealthAndOtherCharacteristics])
  @nestAccessControl.UseRoles({
    resource: "HealthAndOtherCharacteristics",
    action: "read",
    possession: "any",
  })
  async healthAndOtherCharacteristicsItems(
    @graphql.Args() args: HealthAndOtherCharacteristicsFindManyArgs
  ): Promise<HealthAndOtherCharacteristics[]> {
    return this.service.healthAndOtherCharacteristicsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HealthAndOtherCharacteristics, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HealthAndOtherCharacteristics",
    action: "read",
    possession: "own",
  })
  async healthAndOtherCharacteristics(
    @graphql.Args() args: HealthAndOtherCharacteristicsFindUniqueArgs
  ): Promise<HealthAndOtherCharacteristics | null> {
    const result = await this.service.healthAndOtherCharacteristics(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HealthAndOtherCharacteristics)
  @nestAccessControl.UseRoles({
    resource: "HealthAndOtherCharacteristics",
    action: "create",
    possession: "any",
  })
  async createHealthAndOtherCharacteristics(
    @graphql.Args() args: CreateHealthAndOtherCharacteristicsArgs
  ): Promise<HealthAndOtherCharacteristics> {
    return await this.service.createHealthAndOtherCharacteristics({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HealthAndOtherCharacteristics)
  @nestAccessControl.UseRoles({
    resource: "HealthAndOtherCharacteristics",
    action: "update",
    possession: "any",
  })
  async updateHealthAndOtherCharacteristics(
    @graphql.Args() args: UpdateHealthAndOtherCharacteristicsArgs
  ): Promise<HealthAndOtherCharacteristics | null> {
    try {
      return await this.service.updateHealthAndOtherCharacteristics({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => HealthAndOtherCharacteristics)
  @nestAccessControl.UseRoles({
    resource: "HealthAndOtherCharacteristics",
    action: "delete",
    possession: "any",
  })
  async deleteHealthAndOtherCharacteristics(
    @graphql.Args() args: DeleteHealthAndOtherCharacteristicsArgs
  ): Promise<HealthAndOtherCharacteristics | null> {
    try {
      return await this.service.deleteHealthAndOtherCharacteristics(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

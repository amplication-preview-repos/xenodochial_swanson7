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
import { Fishing } from "./Fishing";
import { FishingCountArgs } from "./FishingCountArgs";
import { FishingFindManyArgs } from "./FishingFindManyArgs";
import { FishingFindUniqueArgs } from "./FishingFindUniqueArgs";
import { CreateFishingArgs } from "./CreateFishingArgs";
import { UpdateFishingArgs } from "./UpdateFishingArgs";
import { DeleteFishingArgs } from "./DeleteFishingArgs";
import { FishingService } from "../fishing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Fishing)
export class FishingResolverBase {
  constructor(
    protected readonly service: FishingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "read",
    possession: "any",
  })
  async _fishingsMeta(
    @graphql.Args() args: FishingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Fishing])
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "read",
    possession: "any",
  })
  async fishings(
    @graphql.Args() args: FishingFindManyArgs
  ): Promise<Fishing[]> {
    return this.service.fishings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Fishing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "read",
    possession: "own",
  })
  async fishing(
    @graphql.Args() args: FishingFindUniqueArgs
  ): Promise<Fishing | null> {
    const result = await this.service.fishing(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Fishing)
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "create",
    possession: "any",
  })
  async createFishing(
    @graphql.Args() args: CreateFishingArgs
  ): Promise<Fishing> {
    return await this.service.createFishing({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Fishing)
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "update",
    possession: "any",
  })
  async updateFishing(
    @graphql.Args() args: UpdateFishingArgs
  ): Promise<Fishing | null> {
    try {
      return await this.service.updateFishing({
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

  @graphql.Mutation(() => Fishing)
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "delete",
    possession: "any",
  })
  async deleteFishing(
    @graphql.Args() args: DeleteFishingArgs
  ): Promise<Fishing | null> {
    try {
      return await this.service.deleteFishing(args);
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

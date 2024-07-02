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
import { WasteManagement } from "./WasteManagement";
import { WasteManagementCountArgs } from "./WasteManagementCountArgs";
import { WasteManagementFindManyArgs } from "./WasteManagementFindManyArgs";
import { WasteManagementFindUniqueArgs } from "./WasteManagementFindUniqueArgs";
import { CreateWasteManagementArgs } from "./CreateWasteManagementArgs";
import { UpdateWasteManagementArgs } from "./UpdateWasteManagementArgs";
import { DeleteWasteManagementArgs } from "./DeleteWasteManagementArgs";
import { WasteManagementService } from "../wasteManagement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WasteManagement)
export class WasteManagementResolverBase {
  constructor(
    protected readonly service: WasteManagementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "WasteManagement",
    action: "read",
    possession: "any",
  })
  async _wasteManagementsMeta(
    @graphql.Args() args: WasteManagementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [WasteManagement])
  @nestAccessControl.UseRoles({
    resource: "WasteManagement",
    action: "read",
    possession: "any",
  })
  async wasteManagements(
    @graphql.Args() args: WasteManagementFindManyArgs
  ): Promise<WasteManagement[]> {
    return this.service.wasteManagements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => WasteManagement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "WasteManagement",
    action: "read",
    possession: "own",
  })
  async wasteManagement(
    @graphql.Args() args: WasteManagementFindUniqueArgs
  ): Promise<WasteManagement | null> {
    const result = await this.service.wasteManagement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WasteManagement)
  @nestAccessControl.UseRoles({
    resource: "WasteManagement",
    action: "create",
    possession: "any",
  })
  async createWasteManagement(
    @graphql.Args() args: CreateWasteManagementArgs
  ): Promise<WasteManagement> {
    return await this.service.createWasteManagement({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => WasteManagement)
  @nestAccessControl.UseRoles({
    resource: "WasteManagement",
    action: "update",
    possession: "any",
  })
  async updateWasteManagement(
    @graphql.Args() args: UpdateWasteManagementArgs
  ): Promise<WasteManagement | null> {
    try {
      return await this.service.updateWasteManagement({
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

  @graphql.Mutation(() => WasteManagement)
  @nestAccessControl.UseRoles({
    resource: "WasteManagement",
    action: "delete",
    possession: "any",
  })
  async deleteWasteManagement(
    @graphql.Args() args: DeleteWasteManagementArgs
  ): Promise<WasteManagement | null> {
    try {
      return await this.service.deleteWasteManagement(args);
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

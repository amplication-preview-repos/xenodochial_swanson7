/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FishingService } from "../fishing.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FishingCreateInput } from "./FishingCreateInput";
import { Fishing } from "./Fishing";
import { FishingFindManyArgs } from "./FishingFindManyArgs";
import { FishingWhereUniqueInput } from "./FishingWhereUniqueInput";
import { FishingUpdateInput } from "./FishingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FishingControllerBase {
  constructor(
    protected readonly service: FishingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Fishing })
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFishing(
    @common.Body() data: FishingCreateInput
  ): Promise<Fishing> {
    return await this.service.createFishing({
      data: data,
      select: {
        accessToFishingSupport: true,
        annualCatch: true,
        commonIssuesFaced: true,
        commonSpeciesCaught: true,
        createdAt: true,
        fishingGearUsed: true,
        fishingGrounds: true,
        id: true,
        typeOfFishing: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Fishing] })
  @ApiNestedQuery(FishingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fishings(@common.Req() request: Request): Promise<Fishing[]> {
    const args = plainToClass(FishingFindManyArgs, request.query);
    return this.service.fishings({
      ...args,
      select: {
        accessToFishingSupport: true,
        annualCatch: true,
        commonIssuesFaced: true,
        commonSpeciesCaught: true,
        createdAt: true,
        fishingGearUsed: true,
        fishingGrounds: true,
        id: true,
        typeOfFishing: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Fishing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fishing(
    @common.Param() params: FishingWhereUniqueInput
  ): Promise<Fishing | null> {
    const result = await this.service.fishing({
      where: params,
      select: {
        accessToFishingSupport: true,
        annualCatch: true,
        commonIssuesFaced: true,
        commonSpeciesCaught: true,
        createdAt: true,
        fishingGearUsed: true,
        fishingGrounds: true,
        id: true,
        typeOfFishing: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Fishing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFishing(
    @common.Param() params: FishingWhereUniqueInput,
    @common.Body() data: FishingUpdateInput
  ): Promise<Fishing | null> {
    try {
      return await this.service.updateFishing({
        where: params,
        data: data,
        select: {
          accessToFishingSupport: true,
          annualCatch: true,
          commonIssuesFaced: true,
          commonSpeciesCaught: true,
          createdAt: true,
          fishingGearUsed: true,
          fishingGrounds: true,
          id: true,
          typeOfFishing: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Fishing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Fishing",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFishing(
    @common.Param() params: FishingWhereUniqueInput
  ): Promise<Fishing | null> {
    try {
      return await this.service.deleteFishing({
        where: params,
        select: {
          accessToFishingSupport: true,
          annualCatch: true,
          commonIssuesFaced: true,
          commonSpeciesCaught: true,
          createdAt: true,
          fishingGearUsed: true,
          fishingGrounds: true,
          id: true,
          typeOfFishing: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

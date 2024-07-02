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
import { CropFarmingService } from "../cropFarming.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CropFarmingCreateInput } from "./CropFarmingCreateInput";
import { CropFarming } from "./CropFarming";
import { CropFarmingFindManyArgs } from "./CropFarmingFindManyArgs";
import { CropFarmingWhereUniqueInput } from "./CropFarmingWhereUniqueInput";
import { CropFarmingUpdateInput } from "./CropFarmingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CropFarmingControllerBase {
  constructor(
    protected readonly service: CropFarmingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CropFarming })
  @nestAccessControl.UseRoles({
    resource: "CropFarming",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCropFarming(
    @common.Body() data: CropFarmingCreateInput
  ): Promise<CropFarming> {
    return await this.service.createCropFarming({
      data: data,
      select: {
        accessToAgriculturalSupport: true,
        annualYield: true,
        areaCultivated: true,
        commonPestsAndDiseases: true,
        createdAt: true,
        farmingEquipmentUsed: true,
        id: true,
        irrigationMethod: true,
        typeOfCropsGrown: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CropFarming] })
  @ApiNestedQuery(CropFarmingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CropFarming",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cropFarmings(@common.Req() request: Request): Promise<CropFarming[]> {
    const args = plainToClass(CropFarmingFindManyArgs, request.query);
    return this.service.cropFarmings({
      ...args,
      select: {
        accessToAgriculturalSupport: true,
        annualYield: true,
        areaCultivated: true,
        commonPestsAndDiseases: true,
        createdAt: true,
        farmingEquipmentUsed: true,
        id: true,
        irrigationMethod: true,
        typeOfCropsGrown: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CropFarming })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CropFarming",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cropFarming(
    @common.Param() params: CropFarmingWhereUniqueInput
  ): Promise<CropFarming | null> {
    const result = await this.service.cropFarming({
      where: params,
      select: {
        accessToAgriculturalSupport: true,
        annualYield: true,
        areaCultivated: true,
        commonPestsAndDiseases: true,
        createdAt: true,
        farmingEquipmentUsed: true,
        id: true,
        irrigationMethod: true,
        typeOfCropsGrown: true,
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
  @swagger.ApiOkResponse({ type: CropFarming })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CropFarming",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCropFarming(
    @common.Param() params: CropFarmingWhereUniqueInput,
    @common.Body() data: CropFarmingUpdateInput
  ): Promise<CropFarming | null> {
    try {
      return await this.service.updateCropFarming({
        where: params,
        data: data,
        select: {
          accessToAgriculturalSupport: true,
          annualYield: true,
          areaCultivated: true,
          commonPestsAndDiseases: true,
          createdAt: true,
          farmingEquipmentUsed: true,
          id: true,
          irrigationMethod: true,
          typeOfCropsGrown: true,
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
  @swagger.ApiOkResponse({ type: CropFarming })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CropFarming",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCropFarming(
    @common.Param() params: CropFarmingWhereUniqueInput
  ): Promise<CropFarming | null> {
    try {
      return await this.service.deleteCropFarming({
        where: params,
        select: {
          accessToAgriculturalSupport: true,
          annualYield: true,
          areaCultivated: true,
          commonPestsAndDiseases: true,
          createdAt: true,
          farmingEquipmentUsed: true,
          id: true,
          irrigationMethod: true,
          typeOfCropsGrown: true,
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

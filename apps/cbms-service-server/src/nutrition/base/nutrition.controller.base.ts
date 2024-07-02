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
import { NutritionService } from "../nutrition.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NutritionCreateInput } from "./NutritionCreateInput";
import { Nutrition } from "./Nutrition";
import { NutritionFindManyArgs } from "./NutritionFindManyArgs";
import { NutritionWhereUniqueInput } from "./NutritionWhereUniqueInput";
import { NutritionUpdateInput } from "./NutritionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NutritionControllerBase {
  constructor(
    protected readonly service: NutritionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Nutrition })
  @nestAccessControl.UseRoles({
    resource: "Nutrition",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createNutrition(
    @common.Body() data: NutritionCreateInput
  ): Promise<Nutrition> {
    return await this.service.createNutrition({
      data: data,
      select: {
        accessToNutritiousFood: true,
        createdAt: true,
        dietaryIntake: true,
        height: true,
        id: true,
        mealFrequency: true,
        nutritionalSupplements: true,
        specialDietaryNeeds: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Nutrition] })
  @ApiNestedQuery(NutritionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Nutrition",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async nutritions(@common.Req() request: Request): Promise<Nutrition[]> {
    const args = plainToClass(NutritionFindManyArgs, request.query);
    return this.service.nutritions({
      ...args,
      select: {
        accessToNutritiousFood: true,
        createdAt: true,
        dietaryIntake: true,
        height: true,
        id: true,
        mealFrequency: true,
        nutritionalSupplements: true,
        specialDietaryNeeds: true,
        updatedAt: true,
        weight: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Nutrition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Nutrition",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async nutrition(
    @common.Param() params: NutritionWhereUniqueInput
  ): Promise<Nutrition | null> {
    const result = await this.service.nutrition({
      where: params,
      select: {
        accessToNutritiousFood: true,
        createdAt: true,
        dietaryIntake: true,
        height: true,
        id: true,
        mealFrequency: true,
        nutritionalSupplements: true,
        specialDietaryNeeds: true,
        updatedAt: true,
        weight: true,
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
  @swagger.ApiOkResponse({ type: Nutrition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Nutrition",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateNutrition(
    @common.Param() params: NutritionWhereUniqueInput,
    @common.Body() data: NutritionUpdateInput
  ): Promise<Nutrition | null> {
    try {
      return await this.service.updateNutrition({
        where: params,
        data: data,
        select: {
          accessToNutritiousFood: true,
          createdAt: true,
          dietaryIntake: true,
          height: true,
          id: true,
          mealFrequency: true,
          nutritionalSupplements: true,
          specialDietaryNeeds: true,
          updatedAt: true,
          weight: true,
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
  @swagger.ApiOkResponse({ type: Nutrition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Nutrition",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteNutrition(
    @common.Param() params: NutritionWhereUniqueInput
  ): Promise<Nutrition | null> {
    try {
      return await this.service.deleteNutrition({
        where: params,
        select: {
          accessToNutritiousFood: true,
          createdAt: true,
          dietaryIntake: true,
          height: true,
          id: true,
          mealFrequency: true,
          nutritionalSupplements: true,
          specialDietaryNeeds: true,
          updatedAt: true,
          weight: true,
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

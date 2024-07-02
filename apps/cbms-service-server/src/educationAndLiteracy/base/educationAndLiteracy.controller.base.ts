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
import { EducationAndLiteracyService } from "../educationAndLiteracy.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EducationAndLiteracyCreateInput } from "./EducationAndLiteracyCreateInput";
import { EducationAndLiteracy } from "./EducationAndLiteracy";
import { EducationAndLiteracyFindManyArgs } from "./EducationAndLiteracyFindManyArgs";
import { EducationAndLiteracyWhereUniqueInput } from "./EducationAndLiteracyWhereUniqueInput";
import { EducationAndLiteracyUpdateInput } from "./EducationAndLiteracyUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EducationAndLiteracyControllerBase {
  constructor(
    protected readonly service: EducationAndLiteracyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EducationAndLiteracy })
  @nestAccessControl.UseRoles({
    resource: "EducationAndLiteracy",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEducationAndLiteracy(
    @common.Body() data: EducationAndLiteracyCreateInput
  ): Promise<EducationAndLiteracy> {
    return await this.service.createEducationAndLiteracy({
      data: data,
      select: {
        createdAt: true,
        currentlyEnrolled: true,
        fieldOfStudy: true,
        highestEducationalAttainment: true,
        id: true,
        literacyLevel: true,
        schoolAddress: true,
        schoolName: true,
        updatedAt: true,
        vocationalTraining: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EducationAndLiteracy] })
  @ApiNestedQuery(EducationAndLiteracyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EducationAndLiteracy",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async educationAndLiteracies(
    @common.Req() request: Request
  ): Promise<EducationAndLiteracy[]> {
    const args = plainToClass(EducationAndLiteracyFindManyArgs, request.query);
    return this.service.educationAndLiteracies({
      ...args,
      select: {
        createdAt: true,
        currentlyEnrolled: true,
        fieldOfStudy: true,
        highestEducationalAttainment: true,
        id: true,
        literacyLevel: true,
        schoolAddress: true,
        schoolName: true,
        updatedAt: true,
        vocationalTraining: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EducationAndLiteracy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EducationAndLiteracy",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async educationAndLiteracy(
    @common.Param() params: EducationAndLiteracyWhereUniqueInput
  ): Promise<EducationAndLiteracy | null> {
    const result = await this.service.educationAndLiteracy({
      where: params,
      select: {
        createdAt: true,
        currentlyEnrolled: true,
        fieldOfStudy: true,
        highestEducationalAttainment: true,
        id: true,
        literacyLevel: true,
        schoolAddress: true,
        schoolName: true,
        updatedAt: true,
        vocationalTraining: true,
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
  @swagger.ApiOkResponse({ type: EducationAndLiteracy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EducationAndLiteracy",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEducationAndLiteracy(
    @common.Param() params: EducationAndLiteracyWhereUniqueInput,
    @common.Body() data: EducationAndLiteracyUpdateInput
  ): Promise<EducationAndLiteracy | null> {
    try {
      return await this.service.updateEducationAndLiteracy({
        where: params,
        data: data,
        select: {
          createdAt: true,
          currentlyEnrolled: true,
          fieldOfStudy: true,
          highestEducationalAttainment: true,
          id: true,
          literacyLevel: true,
          schoolAddress: true,
          schoolName: true,
          updatedAt: true,
          vocationalTraining: true,
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
  @swagger.ApiOkResponse({ type: EducationAndLiteracy })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EducationAndLiteracy",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEducationAndLiteracy(
    @common.Param() params: EducationAndLiteracyWhereUniqueInput
  ): Promise<EducationAndLiteracy | null> {
    try {
      return await this.service.deleteEducationAndLiteracy({
        where: params,
        select: {
          createdAt: true,
          currentlyEnrolled: true,
          fieldOfStudy: true,
          highestEducationalAttainment: true,
          id: true,
          literacyLevel: true,
          schoolAddress: true,
          schoolName: true,
          updatedAt: true,
          vocationalTraining: true,
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

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsBoolean,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumDemographyEducationalAttainment } from "./EnumDemographyEducationalAttainment";
import { EnumDemographyEmploymentStatus } from "./EnumDemographyEmploymentStatus";
import { EnumDemographyGender } from "./EnumDemographyGender";
import { EnumDemographyMaritalStatus } from "./EnumDemographyMaritalStatus";

@ObjectType()
class Demography {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  citizenship!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  disabilityStatus!: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumDemographyEducationalAttainment,
  })
  @IsEnum(EnumDemographyEducationalAttainment)
  @IsOptional()
  @Field(() => EnumDemographyEducationalAttainment, {
    nullable: true,
  })
  educationalAttainment?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumDemographyEmploymentStatus,
  })
  @IsEnum(EnumDemographyEmploymentStatus)
  @IsOptional()
  @Field(() => EnumDemographyEmploymentStatus, {
    nullable: true,
  })
  employmentStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ethnicity!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDemographyGender,
  })
  @IsEnum(EnumDemographyGender)
  @IsOptional()
  @Field(() => EnumDemographyGender, {
    nullable: true,
  })
  gender?: "Option1" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumDemographyMaritalStatus,
  })
  @IsEnum(EnumDemographyMaritalStatus)
  @IsOptional()
  @Field(() => EnumDemographyMaritalStatus, {
    nullable: true,
  })
  maritalStatus?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Demography as Demography };

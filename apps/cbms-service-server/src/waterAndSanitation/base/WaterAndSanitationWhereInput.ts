/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum } from "class-validator";
import { EnumWaterAndSanitationFrequencyOfWasteCollection } from "./EnumWaterAndSanitationFrequencyOfWasteCollection";
import { StringFilter } from "../../util/StringFilter";
import { EnumWaterAndSanitationSanitationFacilityType } from "./EnumWaterAndSanitationSanitationFacilityType";
import { EnumWaterAndSanitationWastewaterDisposalMethod } from "./EnumWaterAndSanitationWastewaterDisposalMethod";
import { EnumWaterAndSanitationWaterAvailability } from "./EnumWaterAndSanitationWaterAvailability";
import { EnumWaterAndSanitationWaterQuality } from "./EnumWaterAndSanitationWaterQuality";
import { EnumWaterAndSanitationWaterSource } from "./EnumWaterAndSanitationWaterSource";

@InputType()
class WaterAndSanitationWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  accessToSanitationFacility?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumWaterAndSanitationFrequencyOfWasteCollection,
  })
  @IsEnum(EnumWaterAndSanitationFrequencyOfWasteCollection)
  @IsOptional()
  @Field(() => EnumWaterAndSanitationFrequencyOfWasteCollection, {
    nullable: true,
  })
  frequencyOfWasteCollection?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumWaterAndSanitationSanitationFacilityType,
  })
  @IsEnum(EnumWaterAndSanitationSanitationFacilityType)
  @IsOptional()
  @Field(() => EnumWaterAndSanitationSanitationFacilityType, {
    nullable: true,
  })
  sanitationFacilityType?: "Option1";

  @ApiProperty({
    required: false,
    enum: EnumWaterAndSanitationWastewaterDisposalMethod,
  })
  @IsEnum(EnumWaterAndSanitationWastewaterDisposalMethod)
  @IsOptional()
  @Field(() => EnumWaterAndSanitationWastewaterDisposalMethod, {
    nullable: true,
  })
  wastewaterDisposalMethod?: "Option1";

  @ApiProperty({
    required: false,
    enum: EnumWaterAndSanitationWaterAvailability,
  })
  @IsEnum(EnumWaterAndSanitationWaterAvailability)
  @IsOptional()
  @Field(() => EnumWaterAndSanitationWaterAvailability, {
    nullable: true,
  })
  waterAvailability?: "Option1";

  @ApiProperty({
    required: false,
    enum: EnumWaterAndSanitationWaterQuality,
  })
  @IsEnum(EnumWaterAndSanitationWaterQuality)
  @IsOptional()
  @Field(() => EnumWaterAndSanitationWaterQuality, {
    nullable: true,
  })
  waterQuality?: "Option1";

  @ApiProperty({
    required: false,
    enum: EnumWaterAndSanitationWaterSource,
  })
  @IsEnum(EnumWaterAndSanitationWaterSource)
  @IsOptional()
  @Field(() => EnumWaterAndSanitationWaterSource, {
    nullable: true,
  })
  waterSource?: "Option1";
}

export { WaterAndSanitationWhereInput as WaterAndSanitationWhereInput };

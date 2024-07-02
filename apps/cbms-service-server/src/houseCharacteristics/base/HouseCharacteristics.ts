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
import { EnumHouseCharacteristicsConstructionMaterial } from "./EnumHouseCharacteristicsConstructionMaterial";
import {
  IsEnum,
  IsOptional,
  IsDate,
  IsBoolean,
  IsString,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumHouseCharacteristicsHouseType } from "./EnumHouseCharacteristicsHouseType";
import { EnumHouseCharacteristicsOwnershipStatus } from "./EnumHouseCharacteristicsOwnershipStatus";
import { EnumHouseCharacteristicsSanitationFacility } from "./EnumHouseCharacteristicsSanitationFacility";
import { EnumHouseCharacteristicsWaterSupply } from "./EnumHouseCharacteristicsWaterSupply";

@ObjectType()
class HouseCharacteristics {
  @ApiProperty({
    required: false,
    enum: EnumHouseCharacteristicsConstructionMaterial,
  })
  @IsEnum(EnumHouseCharacteristicsConstructionMaterial)
  @IsOptional()
  @Field(() => EnumHouseCharacteristicsConstructionMaterial, {
    nullable: true,
  })
  constructionMaterial?: "Option1" | null;

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
  electricityAccess!: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumHouseCharacteristicsHouseType,
  })
  @IsEnum(EnumHouseCharacteristicsHouseType)
  @IsOptional()
  @Field(() => EnumHouseCharacteristicsHouseType, {
    nullable: true,
  })
  houseType?: "Option1" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  numberOfRooms!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumHouseCharacteristicsOwnershipStatus,
  })
  @IsEnum(EnumHouseCharacteristicsOwnershipStatus)
  @IsOptional()
  @Field(() => EnumHouseCharacteristicsOwnershipStatus, {
    nullable: true,
  })
  ownershipStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumHouseCharacteristicsSanitationFacility,
  })
  @IsEnum(EnumHouseCharacteristicsSanitationFacility)
  @IsOptional()
  @Field(() => EnumHouseCharacteristicsSanitationFacility, {
    nullable: true,
  })
  sanitationFacility?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumHouseCharacteristicsWaterSupply,
  })
  @IsEnum(EnumHouseCharacteristicsWaterSupply)
  @IsOptional()
  @Field(() => EnumHouseCharacteristicsWaterSupply, {
    nullable: true,
  })
  waterSupply?: "Option1" | null;

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
  yearBuilt!: number | null;
}

export { HouseCharacteristics as HouseCharacteristics };

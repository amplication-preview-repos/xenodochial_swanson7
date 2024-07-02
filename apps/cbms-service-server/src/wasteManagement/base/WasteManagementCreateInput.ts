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
import { IsBoolean, IsOptional, IsEnum } from "class-validator";
import { EnumWasteManagementFrequencyOfWasteCollection } from "./EnumWasteManagementFrequencyOfWasteCollection";
import { EnumWasteManagementHazardousWasteDisposal } from "./EnumWasteManagementHazardousWasteDisposal";
import { EnumWasteManagementWasteDisposalMethod } from "./EnumWasteManagementWasteDisposalMethod";

@InputType()
class WasteManagementCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  compostingPractices?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumWasteManagementFrequencyOfWasteCollection,
  })
  @IsEnum(EnumWasteManagementFrequencyOfWasteCollection)
  @IsOptional()
  @Field(() => EnumWasteManagementFrequencyOfWasteCollection, {
    nullable: true,
  })
  frequencyOfWasteCollection?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumWasteManagementHazardousWasteDisposal,
  })
  @IsEnum(EnumWasteManagementHazardousWasteDisposal)
  @IsOptional()
  @Field(() => EnumWasteManagementHazardousWasteDisposal, {
    nullable: true,
  })
  hazardousWasteDisposal?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  recyclingPractices?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumWasteManagementWasteDisposalMethod,
  })
  @IsEnum(EnumWasteManagementWasteDisposalMethod)
  @IsOptional()
  @Field(() => EnumWasteManagementWasteDisposalMethod, {
    nullable: true,
  })
  wasteDisposalMethod?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  wasteSegregationPractices?: boolean | null;
}

export { WasteManagementCreateInput as WasteManagementCreateInput };

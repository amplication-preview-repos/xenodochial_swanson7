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
import { EnumHealthAndOtherCharacteristicsAccessToHealthcare } from "./EnumHealthAndOtherCharacteristicsAccessToHealthcare";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";

@InputType()
class HealthAndOtherCharacteristicsUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumHealthAndOtherCharacteristicsAccessToHealthcare,
  })
  @IsEnum(EnumHealthAndOtherCharacteristicsAccessToHealthcare)
  @IsOptional()
  @Field(() => EnumHealthAndOtherCharacteristicsAccessToHealthcare, {
    nullable: true,
  })
  accessToHealthcare?: "Option1" | null;

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
  chronicDiseases?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  disabilityStatus?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  healthInsuranceStatus?: boolean | null;

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
  primaryHealthProvider?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  vaccinationStatus?: boolean | null;
}

export { HealthAndOtherCharacteristicsUpdateInput as HealthAndOtherCharacteristicsUpdateInput };

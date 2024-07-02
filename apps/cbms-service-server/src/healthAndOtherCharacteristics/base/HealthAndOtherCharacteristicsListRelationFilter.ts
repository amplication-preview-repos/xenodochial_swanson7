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
import { HealthAndOtherCharacteristicsWhereInput } from "./HealthAndOtherCharacteristicsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HealthAndOtherCharacteristicsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HealthAndOtherCharacteristicsWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthAndOtherCharacteristicsWhereInput)
  @IsOptional()
  @Field(() => HealthAndOtherCharacteristicsWhereInput, {
    nullable: true,
  })
  every?: HealthAndOtherCharacteristicsWhereInput;

  @ApiProperty({
    required: false,
    type: () => HealthAndOtherCharacteristicsWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthAndOtherCharacteristicsWhereInput)
  @IsOptional()
  @Field(() => HealthAndOtherCharacteristicsWhereInput, {
    nullable: true,
  })
  some?: HealthAndOtherCharacteristicsWhereInput;

  @ApiProperty({
    required: false,
    type: () => HealthAndOtherCharacteristicsWhereInput,
  })
  @ValidateNested()
  @Type(() => HealthAndOtherCharacteristicsWhereInput)
  @IsOptional()
  @Field(() => HealthAndOtherCharacteristicsWhereInput, {
    nullable: true,
  })
  none?: HealthAndOtherCharacteristicsWhereInput;
}
export { HealthAndOtherCharacteristicsListRelationFilter as HealthAndOtherCharacteristicsListRelationFilter };

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
import { WasteManagementWhereInput } from "./WasteManagementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WasteManagementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WasteManagementWhereInput,
  })
  @ValidateNested()
  @Type(() => WasteManagementWhereInput)
  @IsOptional()
  @Field(() => WasteManagementWhereInput, {
    nullable: true,
  })
  every?: WasteManagementWhereInput;

  @ApiProperty({
    required: false,
    type: () => WasteManagementWhereInput,
  })
  @ValidateNested()
  @Type(() => WasteManagementWhereInput)
  @IsOptional()
  @Field(() => WasteManagementWhereInput, {
    nullable: true,
  })
  some?: WasteManagementWhereInput;

  @ApiProperty({
    required: false,
    type: () => WasteManagementWhereInput,
  })
  @ValidateNested()
  @Type(() => WasteManagementWhereInput)
  @IsOptional()
  @Field(() => WasteManagementWhereInput, {
    nullable: true,
  })
  none?: WasteManagementWhereInput;
}
export { WasteManagementListRelationFilter as WasteManagementListRelationFilter };

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgricultureFarmingWhereUniqueInput } from "./AgricultureFarmingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteAgricultureFarmingArgs {
  @ApiProperty({
    required: true,
    type: () => AgricultureFarmingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgricultureFarmingWhereUniqueInput)
  @Field(() => AgricultureFarmingWhereUniqueInput, { nullable: false })
  where!: AgricultureFarmingWhereUniqueInput;
}

export { DeleteAgricultureFarmingArgs as DeleteAgricultureFarmingArgs };

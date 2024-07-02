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
import { HousingWhereUniqueInput } from "./HousingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteHousingArgs {
  @ApiProperty({
    required: true,
    type: () => HousingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HousingWhereUniqueInput)
  @Field(() => HousingWhereUniqueInput, { nullable: false })
  where!: HousingWhereUniqueInput;
}

export { DeleteHousingArgs as DeleteHousingArgs };

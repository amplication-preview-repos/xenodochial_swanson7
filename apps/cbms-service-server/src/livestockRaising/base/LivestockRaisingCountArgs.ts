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
import { LivestockRaisingWhereInput } from "./LivestockRaisingWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class LivestockRaisingCountArgs {
  @ApiProperty({
    required: false,
    type: () => LivestockRaisingWhereInput,
  })
  @Field(() => LivestockRaisingWhereInput, { nullable: true })
  @Type(() => LivestockRaisingWhereInput)
  where?: LivestockRaisingWhereInput;
}

export { LivestockRaisingCountArgs as LivestockRaisingCountArgs };

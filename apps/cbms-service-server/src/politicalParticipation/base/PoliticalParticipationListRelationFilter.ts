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
import { PoliticalParticipationWhereInput } from "./PoliticalParticipationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PoliticalParticipationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PoliticalParticipationWhereInput,
  })
  @ValidateNested()
  @Type(() => PoliticalParticipationWhereInput)
  @IsOptional()
  @Field(() => PoliticalParticipationWhereInput, {
    nullable: true,
  })
  every?: PoliticalParticipationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoliticalParticipationWhereInput,
  })
  @ValidateNested()
  @Type(() => PoliticalParticipationWhereInput)
  @IsOptional()
  @Field(() => PoliticalParticipationWhereInput, {
    nullable: true,
  })
  some?: PoliticalParticipationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoliticalParticipationWhereInput,
  })
  @ValidateNested()
  @Type(() => PoliticalParticipationWhereInput)
  @IsOptional()
  @Field(() => PoliticalParticipationWhereInput, {
    nullable: true,
  })
  none?: PoliticalParticipationWhereInput;
}
export { PoliticalParticipationListRelationFilter as PoliticalParticipationListRelationFilter };

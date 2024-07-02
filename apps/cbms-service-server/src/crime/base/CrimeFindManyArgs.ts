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
import { CrimeWhereInput } from "./CrimeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CrimeOrderByInput } from "./CrimeOrderByInput";

@ArgsType()
class CrimeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CrimeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CrimeWhereInput, { nullable: true })
  @Type(() => CrimeWhereInput)
  where?: CrimeWhereInput;

  @ApiProperty({
    required: false,
    type: [CrimeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CrimeOrderByInput], { nullable: true })
  @Type(() => CrimeOrderByInput)
  orderBy?: Array<CrimeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CrimeFindManyArgs as CrimeFindManyArgs };

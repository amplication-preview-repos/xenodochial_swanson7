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
import { CropFarmingWhereUniqueInput } from "./CropFarmingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CropFarmingUpdateInput } from "./CropFarmingUpdateInput";

@ArgsType()
class UpdateCropFarmingArgs {
  @ApiProperty({
    required: true,
    type: () => CropFarmingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CropFarmingWhereUniqueInput)
  @Field(() => CropFarmingWhereUniqueInput, { nullable: false })
  where!: CropFarmingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CropFarmingUpdateInput,
  })
  @ValidateNested()
  @Type(() => CropFarmingUpdateInput)
  @Field(() => CropFarmingUpdateInput, { nullable: false })
  data!: CropFarmingUpdateInput;
}

export { UpdateCropFarmingArgs as UpdateCropFarmingArgs };

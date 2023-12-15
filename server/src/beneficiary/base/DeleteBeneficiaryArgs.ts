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
import { BeneficiaryWhereUniqueInput } from "./BeneficiaryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteBeneficiaryArgs {
  @ApiProperty({
    required: true,
    type: () => BeneficiaryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BeneficiaryWhereUniqueInput)
  @Field(() => BeneficiaryWhereUniqueInput, { nullable: false })
  where!: BeneficiaryWhereUniqueInput;
}

export { DeleteBeneficiaryArgs as DeleteBeneficiaryArgs };
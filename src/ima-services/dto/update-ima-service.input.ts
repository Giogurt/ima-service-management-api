import { Field, Float, InputType, Int, OmitType, PartialType } from "@nestjs/graphql";
import { CreateImaServiceInput } from "./create-ima-service.input";

@InputType()
export class UpdateImaServiceInput extends PartialType(
    OmitType(CreateImaServiceInput, ['clientName', 'clientEmail', 'clientPhone', 'clientId', 'employeeId'] as const)
) {
    @Field(() => Int)
    id: number;

    @Field(() => Float, {nullable: true})
    cost?: number;

    @Field({nullable: true})
    status?: string;

    @Field({nullable: true})
    departureDate?: string;

    @Field(() => Int, {nullable: true})
    completedPercent?: number
}
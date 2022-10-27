import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createImaServiceInput {
    @Field()
    clientName: string;
}
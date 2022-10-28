import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateEmployeeInput {

    @Field()
    authId: string;

    @Field()
    name: string;

    // @Field()
    // lastName: string;

    @Field()
    email: string;

    @Field({nullable: true})
    role?: string;
}
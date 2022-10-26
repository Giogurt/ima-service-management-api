import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ImaService {
    @Field(type => Int)
    id: number;

    @Field()
    clientName: string;

    // @Field({nullable: true})
    // clientComment?: string;
    // @Field({nullable: true})
    // employeeNotes?: string;
    // @Field()
    // status: string;
    // @Field()
    // entryDate: Date;
    // @Field({nullable: true})
    // departureDate?: Date;
    // @Field(type => Int)
    // completedPercent: number;
    // @Field()
    // needsInvoice: boolean;
    // @Field({nullable: true})
    // invoice?: string;
    
}
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateImaServiceInput {
    // Temporal fields for mock
    @Field()
    clientName: string;

    @Field()
    clientEmail: string;

    
    @Field({nullable: true})
    clientComment?: string;

    @Field({nullable: true})
    employeeNotes?: string;

    @Field()
    entryDate: string;

    @Field({nullable: true})
    departureDate?: string;

    @Field()
    toPickup: boolean;

    @Field()
    deviceModel: string;

    @Field()
    deviceCondition: string;

    @Field({nullable: true})
    deviceNotes?: string;

    // @Field()
    // needsInvoice: boolean;

    // @Field({nullable: true})
    // invoice?: string;

    @Field(() => Int, {nullable: true})
    clientId?: number;

    @Field(() => Int)
    employeeId: number;

    // @ManyToOne(() => Client, client => client.services)
    // @Field(() => Client)
    // client: Client;

    // @ManyToOne(() => Employee, employee => employee.services)
    // @Field(() => Employee)
    // employee: Employee;
}
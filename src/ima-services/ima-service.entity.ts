import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Client } from "src/clients/entities/client.entity";
import { Employee } from "src/employees/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class ImaService {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({nullable: true})
    @Field({nullable: true})
    clientComment?: string;

    @Column({nullable: true})
    @Field({nullable: true})
    employeeNotes?: string;

    @Column()
    @Field()
    status: string;

    @Column()
    @Field()
    entryDate: string;

    @Column({nullable: true})
    @Field({nullable: true})
    departureDate?: string;

    @Column()
    @Field(() => Int)
    completedPercent: number;

    @Column()
    @Field()
    toPickup: boolean;

    @Column()
    @Field()
    deviceModel: string;

    @Column()
    @Field()
    deviceCondition: string;

    @Column({nullable: true})
    @Field({nullable: true})
    deviceNotes?: string;

    // @Column()
    // @Field()
    // needsInvoice: boolean;

    // @Column()
    // @Field({nullable: true})
    // invoice?: string;

    @Column()
    @Field(() => Int)
    clientId: number;

    @Column()
    @Field(() => Int)
    employeeId: number;

    @ManyToOne(() => Client, client => client.services)
    @Field(() => Client)
    client: Client;

    @ManyToOne(() => Employee, employee => employee.services)
    @Field(() => Employee)
    employee: Employee;
    
}
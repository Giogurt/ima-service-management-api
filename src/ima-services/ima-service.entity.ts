import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';
import { Employee } from 'src/employees/employee.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ImaService {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  clientComment?: string;

  @Column({ default: 0 })
  @Field(() => Float, { defaultValue: 0 })
  cost: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  employeeNotes?: string;

  @Column()
  @Field()
  status: string;

  @Column()
  @Field()
  entryDate: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
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
  deviceSerialNumber: string;

  @Column()
  @Field()
  deviceCondition: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  deviceNotes?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  diagnosis?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  invoiceId?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  invoiceNote?: string;

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

  @ManyToOne(() => Client, (client) => client.services)
  @Field(() => Client)
  client: Client;

  @ManyToOne(() => Employee, (employee) => employee.services)
  @Field(() => Employee, { nullable: true })
  employee: Employee;
}

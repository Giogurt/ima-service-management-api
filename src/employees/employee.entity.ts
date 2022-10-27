import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Employee {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    authId: string;

    @Column()
    @Field()
    name: string;

    // @Column()
    // @Field()
    // lastName: string;

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    role: string;
}
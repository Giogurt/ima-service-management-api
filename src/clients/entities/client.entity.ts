import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Client {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({nullable: true})
  @Field({nullable: true})
  authId?: string;

  @Column()
  @Field()
  name: string;

  // @Column()
  // @Field()
  // lastName: string;

  @Column()
  @Field()
  email: string;
}

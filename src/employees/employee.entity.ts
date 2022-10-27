import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ImaService } from 'src/ima-services/ima-service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Employee {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
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

  @OneToMany(() => ImaService, imaService => imaService.client)
  @Field(() => [ImaService], {nullable: true})
  services?: ImaService[];
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ImaService } from 'src/ima-services/ima-service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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

  @OneToMany(() => ImaService, imaService => imaService.client)
  @Field(() => [ImaService], {nullable: true})
  services?: ImaService[];
}

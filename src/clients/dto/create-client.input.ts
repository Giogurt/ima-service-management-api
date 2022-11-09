import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field({nullable: true})
  authId?: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;
}

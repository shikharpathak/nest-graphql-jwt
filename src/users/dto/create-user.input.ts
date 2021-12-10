import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'ID field' })
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;
}

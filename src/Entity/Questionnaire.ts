import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    OneToMany 
} from 'typeorm';
import { 
    ObjectType, 
    Field, 
    Int 
} from '@nestjs/graphql';
import { Question } from 'src/Entity/Question'

@Entity()
@ObjectType()
export class Questionnaire {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Question, question => question.questionnaire)
  @Field(() => [Question], { nullable: true }) 
  questions?: Question[];
}
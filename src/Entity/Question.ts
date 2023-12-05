import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne 
} from 'typeorm';
import { 
    ObjectType, 
    Field, 
    Int 
} from '@nestjs/graphql';
import { Questionnaire } from 'src/Entity/Questionnaire';
import { Answer } from './Answer';

@Entity()
@ObjectType()
export class Question {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  text: string;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.questions)
  @Field(() => Questionnaire) 
  questionnaire: Questionnaire;
  
}
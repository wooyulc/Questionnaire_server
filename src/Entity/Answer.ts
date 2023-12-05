import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Question } from 'src/Entity/Question';


@Entity()
@ObjectType()
export class Answer {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  text: string;

  @Column()
  @Field((type) => Int)
  points: number;

  @Column({ default: false })
  @Field()
  isChecked: boolean;
}
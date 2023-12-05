import { 
    Field, 
    Int, 
    ObjectType
} from "@nestjs/graphql";

import {
    Entity, 
    PrimaryGeneratedColumn, 
    ManyToOne, 
    Column 
} from 'typeorm'

@Entity()
@ObjectType()
export class User{
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    username: string;

    @Column()
    @Field()
    password: string;
}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from 'src/module/user/user.resolver';
import { UserService } from 'src/module/user/user.service';
import { User } from 'src/Entity/User'; 

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserResolver,
    UserService,
  ],
})
export class UsersModule {}
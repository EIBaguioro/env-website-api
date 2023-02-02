import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { UsersService } from './users/services/users/users.service';
import { UsersController } from './users/controllers/users/users.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [CoursesModule, AuthModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}

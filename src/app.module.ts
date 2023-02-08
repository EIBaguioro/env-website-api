import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { UsersService } from './users/services/users/users.service';
import { UsersController } from './users/controllers/users/users.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [CoursesModule, AuthModule, PrismaModule, FileUploadModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {

}

import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { FileUploadService } from 'src/file-upload/services/file-upload/file-upload.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { UsersService } from 'src/users/services/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { CoursesController } from './controllers/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';

@Module({
  imports: [PrismaModule, FileUploadModule, AuthModule, UsersModule],
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService, FileUploadService, JwtAuthGuard, RolesGuard, UsersService]
})
export class CoursesModule {}

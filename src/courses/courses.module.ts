import { Module } from '@nestjs/common';
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { FileUploadService } from 'src/file-upload/services/file-upload/file-upload.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { CoursesController } from './controllers/courses/courses.controller';
import { CoursesService } from './services/courses/courses.service';

@Module({
  imports: [PrismaModule, FileUploadModule],
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService, FileUploadService]
})
export class CoursesModule {}

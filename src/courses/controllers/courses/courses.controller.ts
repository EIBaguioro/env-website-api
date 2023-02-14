import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  Get,
  ParseIntPipe,
  Delete,
  Put,
  UseInterceptors,
  UseGuards 
} from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import {
  Param,
  Query,
  UploadedFile,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';
import { EditCourseDto } from 'src/courses/dto/edit-course.dto';
import { CoursesService } from 'src/courses/services/courses/courses.service';
import { FileUploadService } from 'src/file-upload/services/file-upload/file-upload.service';
import { storage } from 'src/utils/file-upload.config';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('courses')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CoursesController {
  constructor(
    private readonly courseService: CoursesService,
    private readonly fileUploadService: FileUploadService,
  ) {}

  @Post('create')
  @UseInterceptors(
    FileInterceptor('video', {
      storage,
    }),
  )
  @UsePipes(ValidationPipe)
  async createCourse(
    @Body() course: CreateCourseDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const uploadedImage = await this.fileUploadService.upload(file);
    const createdCourse = await this.courseService.createCourse({
      ...course,
      videoUrl: uploadedImage.url,
    });
    return createdCourse;
  }

  
  @Get('filter')
  async getAllCoursesByCategory(@Query('category') category: string) {
    
    const courses = await this.courseService.getAllCoursesByCategory(category);
    return courses;
    
  }
  
  @Get('')
  async getAllCourses() {
    const courses = await this.courseService.getAllCourses();
    return courses;
  }

  @Get(':id') 
  async getCourse(@Param('id', ParseIntPipe) id: number) {
    const course = await this.courseService.getCourse(id);
    return course;
  }


  @Put(':id')
  @UseInterceptors(FileInterceptor('video', { storage }))
  @UsePipes(ValidationPipe)
  async editCourse(
    @Param('id', ParseIntPipe) id: number,
    @Body() course: EditCourseDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    let uploadedImage: string;

    if (file) {
      const { url } = await this.fileUploadService.upload(file);
      uploadedImage = url;
    } else {
      uploadedImage = course.videoUrl;
    }

    const editedCourse = this.courseService.editCourse(id, {
      ...course,
      videoUrl: uploadedImage,
    });

    return editedCourse;
  }

  @Delete('delete')
  async deleteCourse(@Body() courses: string[]) {

  const courseIds = courses.map((id) => parseInt(id));
  
  const deletedCourses = await this.courseService.deleteCourse(courseIds);
  return deletedCourses;
  }
}

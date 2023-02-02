import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  ValidationPipe,
  Get,
  ParseIntPipe,
  Delete,
  Put,
} from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';
import { EditCourseDto } from 'src/courses/dto/edit-course.dto';
import { CoursesService } from 'src/courses/services/courses/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async createCourse(@Body() course: CreateCourseDto) {
    const createdCourse = await this.courseService.createCourse(course);
    return createdCourse;
  }

  @Get()
  async getAllCourses() {
    const courses = await this.courseService.getAllCourses();
    return courses;
  }

  @Put(':id')
  editCourse(
    @Param('id', ParseIntPipe) id: number,
    @Body() course: EditCourseDto,
  ) {
    const editedCourse = this.courseService.editCourse(id, course);
    return editedCourse;
  }

  @Delete(':id')
  deleteCourse(@Param('id', ParseIntPipe) id: number) {
    const deletedCourse = this.courseService.deleteCourse(id);
    return `course ${id} has been deleted`;
  }
}

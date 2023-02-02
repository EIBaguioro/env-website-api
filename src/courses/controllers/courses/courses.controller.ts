import { Body, Controller, Post, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';
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

}

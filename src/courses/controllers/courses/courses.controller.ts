import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from 'src/courses/dto/create-course.dto';
import { CoursesService } from 'src/courses/services/courses/courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService: CoursesService) {}

    @Post('create')
    async createCourse(@Body() course: CreateCourseDto) {
        
        const createdCourse = await this.courseService.createCourse(course);
        return createdCourse;
        
    }

}

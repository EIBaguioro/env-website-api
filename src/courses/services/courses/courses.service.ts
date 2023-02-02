import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from '../../dto/create-course.dto'
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {

    constructor(private readonly prisma: PrismaService) {}

    async createCourse(course: CreateCourseDto) {

        try {
            const createdCourse = await this.prisma.course.create({data: course});
            return createdCourse;
        } catch(error) {
            
            if(error instanceof Prisma.PrismaClientValidationError) {
                throw new HttpException("Missing field or incorrect field type provided", HttpStatus.UNPROCESSABLE_ENTITY); 
            }
            
            console.error(error);
            throw new HttpException("An error has occured. Please consult your administrator.", HttpStatus.INTERNAL_SERVER_ERROR);

        } 
    }

}

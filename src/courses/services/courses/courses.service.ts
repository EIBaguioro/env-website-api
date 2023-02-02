import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from '../../dto/create-course.dto'
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {

    constructor(private readonly prisma: PrismaService) {}

    async createCourse(course: CreateCourseDto) {

        const createdCourse = await this.prisma.course.create({data: course});
        return createdCourse;
        
    }

}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from '../../dto/create-course.dto'
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { EditCourseDto } from 'src/courses/dto/edit-course.dto';

@Injectable()
export class CoursesService {

    constructor(private readonly prisma: PrismaService) {}

    async createCourse(course: CreateCourseDto) {

        const createdCourse = await this.prisma.course.create({data: course});
        return createdCourse;
        
    }

    async getAllCourses() {
        const courses = await this.prisma.course.findMany();
        return courses;
    }

    async getAllCoursesByCategory(category: string) {
        const courses = await this.prisma.course.findMany({ where: { category: { contains: category } } });
        return courses;
    }

    editCourse(id: number, course: EditCourseDto) {
        const editedCourse = this.prisma.course.update({ where: { id }, data: { ...course} });
        return editedCourse;
    }

    deleteCourse(id: number) {
        this.prisma.course.delete({ where: { id } });
    }
    

}

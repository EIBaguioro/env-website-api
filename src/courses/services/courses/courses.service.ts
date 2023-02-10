import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCourseDto } from '../../dto/create-course.dto';
import { PrismaService } from 'src/prisma/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { EditCourseDto } from 'src/courses/dto/edit-course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async createCourse(course: CreateCourseDto) {
    const { intro } = course;

    const createdCourse = await this.prisma.course.create({
      data: { ...course, intro: Boolean(intro) },
    });
    return createdCourse;
  }

  async getCourse(id: number) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    return course;
  }

  async getAllCoursesByCategory(cat: string) {
    const courses = await this.prisma.course.findMany({
      where: {
        category: { startsWith: cat },
      },
    });
    return courses;
  }

  async getAllCourses() {
    const courses = await this.prisma.course.findMany();
    return courses;
  }

  async editCourse(id: number, course: EditCourseDto) {
    const { intro } = course;

    const editedCourse = await this.prisma.course.update({
      where: { id },
      data: { ...course, intro: Boolean(intro) },
    });
    return editedCourse;
  }

  async deleteCourse(ids: number[]) {
    const deletedCourses = await this.prisma.course.deleteMany({
      where: { id: { in: ids } },
    });

    return deletedCourses;
  }
}

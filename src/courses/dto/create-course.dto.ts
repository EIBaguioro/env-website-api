export class CreateCourseDto {
    title: string;
    desc: string;
    intro?: boolean;
    visibility?: boolean;
    videoUrl?: string;
    category: string;
}
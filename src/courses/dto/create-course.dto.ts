import { IsNotEmpty } from "class-validator";

export class CreateCourseDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    desc: string;

    intro?: boolean;

    visibility?: boolean;

    videoUrl?: string;

    @IsNotEmpty()
    category: string;
}
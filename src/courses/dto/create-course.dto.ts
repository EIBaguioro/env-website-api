import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    desc: string;

    intro?: string;

    visibility?: boolean;

    videoUrl?: string;

    @IsNotEmpty()
    category: string;
}
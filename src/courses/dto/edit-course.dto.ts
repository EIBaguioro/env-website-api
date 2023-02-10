import { IsNotEmpty, IsString } from "class-validator";

export class EditCourseDto {

    @IsString()
    title?: string;

    desc?: string;

    intro?: string;

    visibility?: boolean;

    videoUrl?: string;

    category?: string;
}
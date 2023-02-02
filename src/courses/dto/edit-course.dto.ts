import { IsNotEmpty, IsString } from "class-validator";

export class EditCourseDto {

    @IsNotEmpty()
    @IsString()
    title?: string;

    @IsNotEmpty()
    @IsString()
    desc?: string;

    intro?: boolean;

    visibility?: boolean;

    videoUrl?: string;

    @IsNotEmpty()
    category?: string;
}
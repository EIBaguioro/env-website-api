import { IsNotEmpty, IsBoolean, IsString, IsUrl } from "class-validator";

export class CreateCourseDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    desc: string;

    @IsBoolean()
    intro?: boolean;

    @IsBoolean()
    visibility?: boolean;

    @IsUrl()
    videoUrl?: string;

    @IsNotEmpty()
    category: string;
}
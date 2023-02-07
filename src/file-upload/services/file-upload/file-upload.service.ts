import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

@Injectable()
export class FileUploadService {

    private cloudinary = cloudinary.v2;

    constructor() {
        this.cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY
        })
    }

    async upload(file: any) {
        return await this.cloudinary.uploader.upload(file.path, {resource_type: 'video'});
    }

}

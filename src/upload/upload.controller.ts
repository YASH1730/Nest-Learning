import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @Post('upload-file')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file:Express.Multer.File, @Body() body: any):object{
        return this.uploadService.uploadFile(file,body);
    }
}

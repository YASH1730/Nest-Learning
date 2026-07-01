import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
    uploadFile(file:Express.Multer.File, body: any):object{
        return { file : `File uploaded successfully: ${file.originalname}`, data : body};
    }
}

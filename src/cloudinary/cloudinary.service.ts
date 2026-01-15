import { Injectable } from '@nestjs/common';
import cloudinary from 'src/config/cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  uploadFile(
    file: Express.Multer.File,
    folder: string,
  ): Promise<{ url: string }> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'auto',
        },
        (error: any, result: any) => {
          if (error) return reject(error);
          resolve({ url: result.secure_url });
        },
      );

      Readable.from(file.buffer).pipe(uploadStream);
    });
  }
}

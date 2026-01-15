import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) { }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {

        name: { type: 'string' },
        uploader_id: { type: 'string' },
        
        album: { type: 'string' },
        artist: { type: 'string' },

        category: { type: 'string' },
        description: { type: 'string' },

        releaseDate: { type: 'string', format: 'date' },
        
        pdf_sheet: {
          type: 'file',
          format: 'binary',
        },
        audio_file: {
          type: 'file',
          format: 'binary',
        },
        video_file: {
          type: 'file',
          format: 'binary',
        },
        coverImage: {
          type: 'file',
          format: 'binary',
        },
        external_link: { type: 'string' },
      },
    },
  })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'pdf_sheet', maxCount: 1 },
        { name: 'video_file', maxCount: 1 },
        { name: 'audio_file', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
      ],
      {
        storage: memoryStorage()
      },
    ),
  )

  uploadSong(@Body() createSongDto: CreateSongDto, @UploadedFiles() files: {
    pdf_sheet: Express.Multer.File[];
    audio_file?: Express.Multer.File[];
    video_file?: Express.Multer.File[];
    coverImage?: Express.Multer.File[];
  }) {

    return this.songsService.createSong(createSongDto, files);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(+id);
  }
}

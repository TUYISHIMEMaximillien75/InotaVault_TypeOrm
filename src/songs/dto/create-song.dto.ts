import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateSongDto {
 @IsString()
 @ApiProperty({
    example: "name",
 })
 name: string

 @IsString()
 @ApiProperty({
    example: "description",
 })
 description: string

 @IsString()
 @ApiProperty({
    example: "category",
 })
 category: string

 @IsString()
 @ApiProperty({
    example: "artist",
 })
 artist: string

 @IsString()
 @ApiProperty({
    example: "album",
 })
 album: string

 @IsString()
 @ApiProperty({
    example: "pdf_sheet",
 })
 pdf_sheet: string

 @IsString()
 @ApiProperty({
    example: "video_file",
 })
 video_file: string

 @IsString()
 @ApiProperty({
    example: "audio_file",
 })
 audio_file: string

 @IsString()
 @ApiProperty({
    example: "external_link",
 })
 external_link: string

 @IsString()
 @ApiProperty({
    example: "coverImage",
 })
 coverImage: string

 @IsString()
 @ApiProperty({
    example: "releaseDate",
 })
 releaseDate: Date
 


}

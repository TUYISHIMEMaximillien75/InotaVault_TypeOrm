import * as dotenv from "dotenv";
dotenv.config(); // MUST BE AT TOP

import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../users/entities/user.entity";
import { Song } from "../songs/entities/song.entity";
import { Comment } from "../comments/entities/comment.entity";
import { Like } from "src/likes/entities/like.entity";
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD, // must be string
  database: process.env.DB_NAME,
  entities: [User, Song, Comment, Like],
  synchronize: true,
  // ssl: false,
};

export const dataSource = new DataSource(typeOrmConfig as DataSourceOptions);

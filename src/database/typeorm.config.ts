import * as dotenv from "dotenv";
dotenv.config(); // MUST BE AT TOP

import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD, // must be string
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
};

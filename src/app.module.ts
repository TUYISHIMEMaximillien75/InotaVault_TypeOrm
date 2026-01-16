import { Module, OnApplicationBootstrap } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./database/typeorm.config";
import { UsersModule } from "./users/users.module";
// import { AppController } from "./app.controller";
// import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { SongsModule } from './songs/songs.module'; 
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AuthModule, SongsModule, CloudinaryModule, CommentsModule],
  // controllers: [AppController, AuthController],
})
export class AppModule implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log("NestJS bootstrapped — TypeORM should be connected!");
  }
}

import { Module, OnApplicationBootstrap } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./database/typeorm.config";
import { UsersModule } from "./users/users.module";
// import { AppController } from "./app.controller";
// import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";
import { EmailModule } from './email/email.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, AuthModule, EmailModule],
  // controllers: [AppController, AuthController],
})
export class AppModule implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log("NestJS bootstrapped — TypeORM should be connected!");
  }
}

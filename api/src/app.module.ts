import { GeneralExceptionFilter } from "./general-exception.filter";
import { MatchController } from "./controllers/match.controller";
import { AuthController } from "./controllers/auth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MatchSchema } from "./models/match.schema";
import { UsersModule } from "./users/users.module";
import configuration from "./config/configuration";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { APP_FILTER } from "@nestjs/core";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        uri: config.get("database.uri"),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: "matches", schema: MatchSchema }]),
    AuthModule,
    UsersModule,
  ],
  controllers: [MatchController, AuthController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GeneralExceptionFilter,
    },
  ],
})
export class AppModule {}

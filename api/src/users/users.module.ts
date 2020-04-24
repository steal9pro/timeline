import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserSchema } from "src/models/user.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([{ name: "users", schema: UserSchema }])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

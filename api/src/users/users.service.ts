import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {

  constructor(@InjectModel("users") private userModel: Model<any>) {}

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({username}).exec();
  }
}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export type User = {
  id: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {

  constructor(@InjectModel("users") private userModel: Model<any>) {}

  async findOne(email: string): Promise<User | null> {
    return this.userModel.findOne({email}).exec();
  }
}

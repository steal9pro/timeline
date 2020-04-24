import { Controller, Get, UseGuards, Param } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { MatchInterface } from "src/models/match.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@UseGuards(JwtAuthGuard)
@Controller("matches")
export class MatchController {
  constructor(
    @InjectModel("matches") private matchModel: Model<MatchInterface>
  ) {}

  @Get()
  async getMatches() {
    return this.matchModel.find().exec();
  }

  @Get("/:id")
  async getMatch(@Param("id") id: string) {
    return this.matchModel.findById(id).exec();
  }
}

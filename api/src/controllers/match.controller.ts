import { ApiResponse } from "src/interfaces/api-response.interface";
import { Controller, Get, UseGuards, Param } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { MatchInterface } from "src/models/match.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GeneralError } from "src/errors/general-error";

@UseGuards(JwtAuthGuard)
@Controller("matches")
export class MatchController {
  constructor(
    @InjectModel("matches") private matchModel: Model<MatchInterface>
  ) {}

  @Get()
  async getMatches(): Promise<ApiResponse<MatchInterface[]>> {
    const matches = await this.matchModel
      .find()
      .select("_id time")
      .exec();

    return {
      success: true,
      data: matches,
    };
  }

  @Get("/:id")
  async getMatch(
    @Param("id") id: string
  ): Promise<ApiResponse<MatchInterface>> {
    try {
      const match = await this.matchModel.findById(id).exec();

      return {
        success: true,
        data: match,
      };
    } catch (e) {
      throw new GeneralError({
        status: 400,
        message: e.message
      });
    }
  }
}

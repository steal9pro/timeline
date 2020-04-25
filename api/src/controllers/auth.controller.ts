import { Controller, UseGuards, Post, Request } from "@nestjs/common";
import { LocalAuthGuard } from "src/auth/guards/local-auth.guard";
import { AuthService } from "src/auth/auth.service";
import { ApiResponse } from "src/interfaces/api-response.interface";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("sign-in")
  async login(@Request() req): Promise<ApiResponse<string>> {
    const token = await this.authService.login(req.user);
    
    return {
      success: true,
      data: token,
    };
  }
}

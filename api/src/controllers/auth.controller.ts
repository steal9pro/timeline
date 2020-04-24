import { Controller, UseGuards, Post, Request } from "@nestjs/common";
import { LocalAuthGuard } from "src/auth/guards/local-auth.guard";
import { AuthService } from "src/auth/auth.service";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("sign-in")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}

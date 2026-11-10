import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: { username: string; pass?: string; password?: string }) {
    // Kinukuha ang password kahit 'pass' o 'password' ang ipasa mula sa frontend
    const userPassword = dto.pass || dto.password || '';
    return this.authService.register(dto.username, userPassword);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: { username: string; pass?: string; password?: string }) {
    const user = await this.authService.validateUser(dto.username, dto.pass || dto.password || '');
    return this.authService.login(user);
  }
}
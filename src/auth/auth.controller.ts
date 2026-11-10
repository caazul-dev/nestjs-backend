import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: Record<string, any>) {
    // Tinitiyak na makukuha ang password kahit 'pass' o 'password' ang gamit sa frontend
    const username = dto.username;
    const pass = dto.pass || dto.password || '';
    
    return this.authService.register(username, pass);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: Record<string, any>) {
    const username = dto.username;
    const pass = dto.pass || dto.password || '';
    
    const user = await this.authService.validateUser(username, pass);
    return this.authService.login(user);
  }
}
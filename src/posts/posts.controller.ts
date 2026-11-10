import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service.js';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  @Post('register')
  async register(@Body() body: { username: string; password: string; role?: string }) {
    return this.postsService.register(body);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { username: string; password: string }) {
    return this.postsService.login(body);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Body() body: { userId: number }) {
    return this.postsService.logout(body.userId);
  }
}
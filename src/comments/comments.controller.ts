import { Controller, Get } from '@nestjs/common';
import { CommentsService } from './comments.service.js';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async findAll() {
    return this.commentsService.findAll();
  }
}
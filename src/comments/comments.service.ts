import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  async findAll() {
    return [{ id: 1, text: 'Great art!' }];
  }
}
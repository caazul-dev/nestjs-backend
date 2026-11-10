import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async findAll() {
    return [{ id: 1, title: 'Sample Post', content: 'Hello World' }];
  }

  async register(data: any) {
    return { message: 'Registered successfully', data };
  }

  async login(data: any) {
    return { token: 'sample_token' };
  }

  async logout(userId: number) {
    return { message: `Logged out user ${userId}` };
  }
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(username: string, pass: string) {
    return { message: 'Auth registration successful', username };
  }

  async validateUser(username: string, pass: string) {
    return { id: 1, username };
  }

  async login(user: any) {
    return { accessToken: 'sample_jwt_token' };
  }

  async logout(userId: number) {
    return { message: `Auth session terminated for user ${userId}` };
  }

  async refreshTokens(refreshToken: string) {
    return { accessToken: 'new_sample_jwt_token' };
  }
}
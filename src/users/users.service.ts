import { Injectable, ConflictException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: any[] = [];

  async register(dto: RegisterDto) {
    const existingUser = this.users.find(
      (u) => u.email === dto.email || u.username === dto.username,
    );

    if (existingUser) {
      throw new ConflictException('Username or email already in use');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = {
      id: this.users.length + 1,
      username: dto.username,
      email: dto.email,
      password: hashedPassword,
    };

    this.users.push(newUser);

    const { password, ...result } = newUser;
    return {
      message: 'User registered successfully',
      user: result,
    };
  }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UsersModule } from './users/users.module.js';
import { PostsModule } from './posts/posts.module.js';
import { CommentsModule } from './comments/comments.module.js';
import { AuthModule } from './auth/auth.module.js'; // 1. Idagdag itong import

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    AuthModule, // 2. Idagdag ito sa imports array
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
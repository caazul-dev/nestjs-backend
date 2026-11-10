import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Baguhin o Idagdag ang linya na ito bago mag-listen:
  app.enableCors({
    origin: true, // pinapayagan ang lahat ng frontend origins (kasama ang Vercel)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
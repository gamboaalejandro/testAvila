import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { swagger } from './docs/swagger.docs';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  swagger(app);
  app.enableCors(); //enable cors
  await app.listen(3000);
}
bootstrap();

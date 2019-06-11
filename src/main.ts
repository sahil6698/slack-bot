import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelize from './db/db'



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  sequelize
  .sync()
  .then(result=>{
    // console.log(result)
  });
  await app.listen(3000);
}
bootstrap();

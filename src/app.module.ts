import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { MyController } from './my-controller/my-controller.controller';
import { MyService } from './my-service/my-service.service';

@Module({
  imports: [],
  controllers: [AppController, MyController],
  providers: [AppService, CatsService, MyService],
})
export class AppModule {}

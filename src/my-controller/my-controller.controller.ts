import { Controller, Get } from '@nestjs/common';
import { MyService } from '../my-service/my-service.service';

@Controller('my-controller')
export class MyController {
    constructor(private readonly myService: MyService) {}
    @Get()
    getHello(): string {
        return this.myService.getHello();
    }
}

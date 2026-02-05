import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
    getHello(): string {
        return 'USANDO O MY SERVICE!';
    }
}

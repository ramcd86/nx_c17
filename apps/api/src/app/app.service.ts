import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): unknown {
    return { message: 'Welcome to api2!' };
  }
}

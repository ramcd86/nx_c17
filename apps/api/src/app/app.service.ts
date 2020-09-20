import { Injectable } from '@nestjs/common';
// import { Message } from '@workspace/api-interfaces';

@Injectable()
export class AppService {
  getData(): unknown {
    return { message: 'Welcome to api2!' };
  }
}

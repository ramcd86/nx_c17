import { Injectable } from '@nestjs/common';
import { IGlobalConfig } from '@workspace/api-interfaces';

@Injectable()
export class ConfigService {
  constructor() {}

  getConfig(): IGlobalConfig {
    return {
      requestHeaderAuth: {
        authKey: process.env.RAPIDAPI_AUTH_KEY,
        authHostUrl: process.env.RAPIDAPI_HOST,
      },
    };
  }
}

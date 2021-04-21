import { Injectable } from '@nestjs/common';

export interface IGlobalConfig {
  requestHeaderAuth: {
    authKey: string;
    authHostUrl: string;
  };
}

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

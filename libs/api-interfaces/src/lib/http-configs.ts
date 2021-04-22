
export interface ILocalRequestHeaders {
  [key: string]: string | boolean;
}

export interface IGlobalConfig {
  requestHeaderAuth: {
    authKey: string;
    authHostUrl: string;
  };
}

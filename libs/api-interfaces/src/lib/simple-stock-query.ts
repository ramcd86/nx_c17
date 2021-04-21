export interface ISimpleStockBase {
  symbol: string;
  sign: string;
}

export interface ISimpleStockSocial {
  name: string;
  url: string;
  type: string;
}

export interface ISimpleStockLink {
  name: string;
  type: string;
  url: string;
}

export interface ISimpleStockAllTimeHigh {
  price: string;
  timestamp: number;
}

export interface ISimpleStockCoin {
  id: number;
  uuid: string;
  slug: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconType: string;
  iconUrl: string;
  websiteUrl: string;
  socials: ISimpleStockSocial[];
  links: ISimpleStockLink[];
  confirmedSupply: boolean;
  numberOfMarkets: number;
  numberOfExchanges: number;
  type: string;
  volume: number;
  marketCap: number;
  price: string;
  circulatingSupply: number;
  totalSupply: number;
  approvedSupply: boolean;
  firstSeen: number;
  listedAt: number;
  change: number;
  rank: number;
  history: string[];
  allTimeHigh: ISimpleStockAllTimeHigh;
  penalty: boolean;
}

export interface ISimpleStockQuery {
  base: ISimpleStockBase;
  coin: ISimpleStockCoin;
}

// @TODO Move these out.

export interface ILocalRequestHeaders {
  [key: string]: string | boolean;
}

export interface IGlobalConfig {
  requestHeaderAuth: {
    authKey: string;
    authHostUrl: string;
  };
}

import { ISimpleStockBase, ISimpleStockCoin, QueryBaseEnum } from '@workspace/api-interfaces';

export interface ICoinQuery {
  stats: ICoinQueryStats;
  base: ISimpleStockBase;
  coins: ISimpleStockCoin[];
}

export interface ICoinQueryStats {
  total: number;
  offset: number;
  limit: number;
  order: string;
  base: string;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: number;
  total24hVolume: number;
}

export interface ICoinAhead {
  id: number;
  symbol: string;
  name: string;
  price: string;
  rank: number;
  uuid: string;
}

export type RequestType = 'POST' | 'GET' | 'PUT' | 'DELETE';

export interface IRequestBody {
  queryType: QueryBaseEnum;
  withValues?: {
    name: string;
    uuid: string;
  }
  returnAttributes:
    | Array<keyof ISimpleStockCoin>
    | Array<keyof ISimpleStockCoin[]>
    | Array<keyof ICoinQuery>;
}

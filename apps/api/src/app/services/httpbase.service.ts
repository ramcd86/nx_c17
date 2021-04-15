import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HttpBaseService {

  constructor(private readonly _httpService: HttpService) {}

  getSingleSimpleStockData(stockId?: string): Observable<any> {
    return this._httpService.get("https://coinranking1.p.rapidapi.com/coin/2",{
      "method": "get",
      "headers": {
        "x-rapidapi-key": "0df3986442msh2570fe324a1c315p188f34jsnd1eef6d5ce18",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "useQueryString": true
      }
    })
  }

}

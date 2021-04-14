// import { HttpService, Injectable } from '@nestjs/common';
// import { Observable } from 'rxjs';

// @Injectable()
// export class HttpBaseService {

//   constructor(private readonly _httpService: HttpService) {}

//   getSingleSimpleStockData(stockName?: string): Observable<any> {
//     const headers = {
//       "x-rapidapi-key": "0df3986442msh2570fe324a1c315p188f34jsnd1eef6d5ce18",
//       "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
//       "useQueryString": true
//     }
//     const params = {
//       "function": "GLOBAL_QUOTE",
//       "symbol": "TSLA"
//     }
//     const url = "https://alpha-vantage.p.rapidapi.com/query"
//     return this._httpService.get(url, {
//       params,
//       headers
//     })
//   }

//   get(): unknown {
//     return { message: 'Welcome to api2!' };
//   }
// }

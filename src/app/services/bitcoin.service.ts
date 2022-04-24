import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  //  cacheKey = 'caching'
  //  cache = localStorage.getItem(this.cacheKey)
  // this.cache = this.cache ? JSON.parse(this.cache) : {}

  async getRate(balance: number) {
    // if (cache[balance]) {
    //   console.log('return from cache for balance ', balance)
    //   return cache[balance]
    // }
    const url = `https://blockchain.info/tobtc?currency=USD&value=${balance}`;
    return this.http.get(url).pipe((res) => {
      console.log('res', res);
      return res;
    });
    // cache[balance] = res.data;
    // localStorage.setItem(cacheKey, JSON.stringify(cache));
  }

  async getMarketPrice(timeSpan = '6months') {
    // if (cache[timeSpan]) {
    //   console.log(
    //     'returning from cache data about bitcoin for timespan of ' + timeSpan
    //   );
    //   return cache[timeSpan];
    // }
    const url = `https://api.blockchain.info/charts/market-price?timespan=${timeSpan}&format=json&cors=true`;
    return this.http.get(url).pipe((res) => res);
  }

  async getConfirmedTransactions() {}
}

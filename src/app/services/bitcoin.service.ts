import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  cache!: any;
  constructor(private http: HttpClient) {
    this.cache = localStorage.getItem('cache');
    this.cache = this.cache ? JSON.parse(this.cache) : {};
  }

  async getRate(balance: number): Promise<number> {
    if (this.cache && this.cache[balance]) {
      console.log('return from cache for balance ', balance);
      return this.cache[balance];
    }
    const url = `https://blockchain.info/tobtc?currency=USD&value=${balance}`;
    const rate = await lastValueFrom(this.http.get<number>(url));
    this.cache[balance] = rate;
    localStorage.setItem('cache', JSON.stringify(this.cache));
    return rate;
  }

  async getMarketPrice(timeSpan = '6months') {
    if (this.cache[timeSpan]) {
      console.log(
        'returning from cache data about bitcoin for timespan of ' + timeSpan
      );
      return this.cache[timeSpan];
    }
    const url = `https://api.blockchain.info/charts/market-price?timespan=${timeSpan}&format=json&cors=true`;
    return this.http.get(url);
  }

  async getConfirmedTransactions() {}
}

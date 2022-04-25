import { Component, OnInit } from '@angular/core';
import { createChart } from 'lightweight-charts';
import { lastValueFrom, Observable } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}
  chart!: HTMLElement;

  chartData!: [number[]];
  ngOnInit(): void {
    const elChart = document.querySelector('.chart');
    if (elChart) this.chart = elChart as HTMLElement;
    // window.addEventListener('resize', this.handleResize);
    this.setData();
  }

  async setData() {
    let data: Observable<Object> = await this.bitcoinService.getMarketPrice();
    let res = await lastValueFrom(data);
    const { values } = JSON.parse(JSON.stringify(res));
    const mappedData = values.map((time: { x: number; y: number }) => {
      return {
        time: new Date(time.x * 1000).toLocaleDateString('en-CA'),
        value: time.y,
      };
    });
    const chart = createChart(this.chart, {
      width: this.chart.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();
    const newSeries = chart.addAreaSeries();
    newSeries.setData(mappedData);
  }

  // handleResize(): void {
  //   this.chart.applyOptions({
  //     width: this.chart.clientWidth,
  //   });
  // }
}

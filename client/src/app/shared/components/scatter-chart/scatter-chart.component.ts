import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

export interface ChartPoint {
  x?: number;
  y?: number;
}

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScatterChartComponent {
  @Input() public set data(value: ChartPoint[]) {
    this._data = value;
    this.scatterChartData[0].data = value;
  }

  @Input() public set label(value: string) {
    this.scatterChartData[0].label = value;
  }

  @Input() public set color(value: string) {
    this.scatterChartData[0].pointBackgroundColor = value;
  }

  public get data(): ChartPoint[] {
    return this._data;
  }

  private _data: ChartPoint[] = [];

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Results',
      pointRadius: 10,
      pointBackgroundColor: 'red',
      pointBorderColor: 'black',
    },
  ];

  public scatterChartType: ChartType = 'scatter';
}

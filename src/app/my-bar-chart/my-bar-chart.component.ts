import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input()
  public barChartData;

  @Input()
  public barChartLabels;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartDataSet: ChartDataSets[];
  constructor() { }

  ngOnInit() {
    this.barChartDataSet =  [
      { 
        data: this.barChartData,
        label: 'Quiz',
        backgroundColor: "#FEC600",
        hoverBackgroundColor: "#ffbf00",
        borderColor: 'black',
      },
      //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];
  }

}

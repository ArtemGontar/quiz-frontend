import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = ['Passed question', 'Failed question'];
  @Input()
  public pieChartData: SingleDataSet;
  public datasets: any[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.datasets = [
      {
        data: this.pieChartData,
        backgroundColor: [
          "#5fe620",
          "#ff496c"
        ],
        hoverBackgroundColor: [
          "#009900",
          "#cc0000"
        ],
        borderColor: 'black',
      }];
  }

}

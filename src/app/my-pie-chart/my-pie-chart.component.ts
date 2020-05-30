import { Component, OnInit } from '@angular/core';
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
  public pieChartData: SingleDataSet = [20, 10];
  public datasets: any[] = [
    {
      data: this.pieChartData,
      backgroundColor: [
        "#33cc33",
        "#ff3300"
      ],
      hoverBackgroundColor: [
        "#009900",
        "#cc0000"
      ],
      borderColor: 'black',
    }];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}

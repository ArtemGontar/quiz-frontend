import { Component, OnInit } from '@angular/core';
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
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { 
      data: [95, 89, 70, 61, 56, 55, 40], 
      label: 'Quiz',
      backgroundColor: "#FEC600",
      hoverBackgroundColor: "#ffbf00",
      borderColor: 'black',
    },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public datasets: any[] = [
    {
      data: this.barChartData,
      
    }];
  constructor() { }

  ngOnInit() {
  }

}

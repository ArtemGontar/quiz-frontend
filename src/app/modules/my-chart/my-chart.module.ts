import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBarChartComponent, MyPieChartComponent } from '../core/core.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    MyBarChartComponent,
    MyPieChartComponent
  ],
  exports: [
    MyBarChartComponent,
    MyPieChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class MyChartModule { }

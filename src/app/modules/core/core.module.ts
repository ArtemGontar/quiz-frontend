import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ClientModule } from '../client/client.module';
import { AdminModule } from '../admin/admin.module';
import { ManagerModule } from '../manager/manager.module';
import { ModeratorModule } from '../moderator/moderator.module';
import { MyBarChartComponent } from 'src/app/modules/my-chart/my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from 'src/app/modules/my-chart/my-pie-chart/my-pie-chart.component';
export {MyBarChartComponent}
export {MyPieChartComponent}
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CoreComponent,
  ],
  imports: [
    NgxPermissionsModule,
    CommonModule,
    NgxSpinnerModule,
    CoreRoutingModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { ManagerRoutingModule } from './manager.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserStatisticComponent } from './statistic/user-statistic/user-statistic.component';
import { MyBarChartComponent } from 'src/app/modules/my-chart/my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from 'src/app/modules/my-chart/my-pie-chart/my-pie-chart.component';
import { CoreModule } from '../core/core.module';
import { MyChartModule } from '../my-chart/my-chart.module';

@NgModule({
  declarations: [
    UserStatisticComponent,
    QuizUserListComponent,
    QuizUserProfileComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    MatSelectModule,
    NgxSpinnerModule,
    MyChartModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true}),
  ]
})
export class ManagerModule { }

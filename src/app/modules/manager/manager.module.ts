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
import { MyPieChartComponent } from 'src/app/my-pie-chart/my-pie-chart.component';
import { MyBarChartComponent } from 'src/app/my-bar-chart/my-bar-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    UserStatisticComponent,
    QuizUserListComponent,
    QuizUserProfileComponent,
    MyPieChartComponent,
    MyBarChartComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    ChartsModule,
    MatSelectModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true}),
  ]
})
export class ManagerModule { }

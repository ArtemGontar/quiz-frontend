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
import { CoreModule } from '../core/core.module';
import { MyChartModule } from '../my-chart/my-chart.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
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

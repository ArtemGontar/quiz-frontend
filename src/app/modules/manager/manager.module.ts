import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizStatisticComponent } from './statistic/quiz-statistic/quiz-statistic.component';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { ManagerRoutingModule } from './manager.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';


@NgModule({
  declarations: [
    QuizStatisticComponent,
    QuizUserListComponent,
    QuizUserProfileComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true}),
  ]
})
export class ManagerModule { }

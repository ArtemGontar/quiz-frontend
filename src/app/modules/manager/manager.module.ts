import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizStatisticComponent } from './statistic/quiz-statistic/quiz-statistic.component';
import { QuizCongratsComponent } from './statistic/quiz-congrats/quiz-congrats.component';
import { ManagerRoutingModule } from './manager.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    QuizStatisticComponent,
    QuizCongratsComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true}),
  ]
})
export class ManagerModule { }

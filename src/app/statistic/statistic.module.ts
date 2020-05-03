import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizStatisticComponent } from '../statistic/quiz-statistic/quiz-statistic.component';
import { QuizCongratsComponent } from './quiz-congrats/quiz-congrats.component';
import { StatisticRoutingModule } from './statistic-routing.module'

@NgModule({
  declarations: [QuizStatisticComponent, QuizCongratsComponent],
  imports: [
    StatisticRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class StatisticModule { }

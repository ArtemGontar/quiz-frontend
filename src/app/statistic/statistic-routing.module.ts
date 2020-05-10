import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizCongratsComponent } from './quiz-congrats/quiz-congrats.component';
import { QuizStatisticComponent } from '../statistic/quiz-statistic/quiz-statistic.component';

const routes: Routes = [
    { path: 'user-statistics', component: QuizStatisticComponent},
    { path: 'congrats', component: QuizCongratsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticRoutingModule { }
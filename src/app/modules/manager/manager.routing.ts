import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuizStatisticComponent } from './statistic/quiz-statistic/quiz-statistic.component';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';

const routes: Routes = [
  { path: 'user-statistics', component: QuizUserListComponent},
    { path: 'user-statistics/:userId', component: QuizStatisticComponent},
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  
  export class ManagerRoutingModule {
  }
  
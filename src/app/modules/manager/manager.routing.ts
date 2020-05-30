import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserStatisticComponent } from './statistic/user-statistic/user-statistic.component';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';

const routes: Routes = [
    { path: 'user-statistics', component: QuizUserListComponent},
    { path: 'user-statistics/:userId', component: UserStatisticComponent},
    { path: 'users/:userId', component: QuizUserProfileComponent},//canActivate: [AuthGuard]
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  
  export class ManagerRoutingModule {
  }
  
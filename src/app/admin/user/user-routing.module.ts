import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizUserListComponent } from './quiz-user-list/quiz-user-list.component';
import { QuizUserProfileComponent } from '../user/quiz-user-profile/quiz-user-profile.component';

const routes: Routes = [
    { path: 'users', component: QuizUserListComponent}, //canActivate: [AuthGuard]
    { path: 'users/:userId', component: QuizUserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
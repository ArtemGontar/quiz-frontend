import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizUserProfileComponent } from '../user/quiz-user-profile/quiz-user-profile.component';

const routes: Routes = [
    { path: 'users/:userId', component: QuizUserProfileComponent},//canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
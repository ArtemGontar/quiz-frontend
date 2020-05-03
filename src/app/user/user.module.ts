import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizUserListComponent } from './quiz-user-list/quiz-user-list.component';
import { QuizUserProfileComponent } from '../user/quiz-user-profile/quiz-user-profile.component';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  declarations: [QuizUserListComponent, QuizUserProfileComponent],
  providers: [UserService],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }

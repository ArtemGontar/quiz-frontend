import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizModule } from './quiz/quiz.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuizModule,
    UserModule,
  ]
})
export class AdminModule { }

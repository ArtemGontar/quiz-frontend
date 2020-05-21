import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { QuizChooseChapterComponent } from './quiz/quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz/quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { QuizStatisticComponent } from './statistic/quiz-statistic/quiz-statistic.component';
import { QuizCongratsComponent } from './statistic/quiz-congrats/quiz-congrats.component';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';
import { UserStatisticComponent } from './statistic/user-statistic/user-statistic.component';

@NgModule({
  declarations: [
    QuizChooseChapterComponent,
    QuizChooseQuizComponent,
    QuizQuestionComponent,
    QuizUserProfileComponent,
    QuizStatisticComponent,
    UserStatisticComponent,
    QuizCongratsComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true}),
  ]
})
export class ClientModule { }

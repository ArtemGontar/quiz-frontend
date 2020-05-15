import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { QuizChooseQuizComponent } from './quiz/quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizChooseChapterComponent } from './quiz/quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { QuizAddQuizComponent } from './quiz/quiz-add-quiz/quiz-add-quiz.component';
import { QuizAddChapterComponent } from './quiz/quiz-add-chapter/quiz-add-chapter.component';
import { AdminRoutingModule } from './admin.routing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    QuizChooseChapterComponent,
    QuizChooseQuizComponent,
    QuizQuestionComponent,
    QuizAddQuizComponent,
    QuizAddChapterComponent,
    QuizUserProfileComponent,
    QuizUserListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true})
  ]
})
export class AdminModule { }

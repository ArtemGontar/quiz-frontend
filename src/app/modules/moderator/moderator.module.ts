import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';
import { QuizAddChapterComponent } from './quiz/quiz-add-chapter/quiz-add-chapter.component';
import { QuizAddQuizComponent } from './quiz/quiz-add-quiz/quiz-add-quiz.component';
import { QuizChooseQuizComponent } from './quiz/quiz-choose-quiz/quiz-choose-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModeratorRoutingModule } from './moderator.routing';
import { QuizChooseChapterComponent } from './quiz/quiz-choose-chapter/quiz-choose-chapter.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    QuizChooseChapterComponent,
    QuizChooseQuizComponent,
    QuizAddQuizComponent,
    QuizAddChapterComponent,
    QuizUserProfileComponent,
    QuizUserListComponent
  ],
  imports: [
    CommonModule,
    ModeratorRoutingModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forChild({
       permissionsIsolate: true, 
       configurationIsolate: true,
       rolesIsolate: true})
  ]
})
export class ModeratorModule { }

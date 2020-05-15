import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuizChooseChapterComponent } from './quiz/quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz/quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { QuizAddChapterComponent } from './quiz/quiz-add-chapter/quiz-add-chapter.component';
import { QuizAddQuizComponent } from './quiz/quiz-add-quiz/quiz-add-quiz.component';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';

const routes: Routes = [
    
    { path: 'chapters', component: QuizChooseChapterComponent},
    { path: 'chapters/:chapterId/quizzes', component: QuizChooseQuizComponent},
    { path: 'quizzes/:quizId/questions', component: QuizQuestionComponent},
    { path: 'add-chapter', component: QuizAddChapterComponent},
    { path: 'chapters/:chapterId/add-quiz', component: QuizAddQuizComponent},
    { path: 'users', component: QuizUserListComponent}, //canActivate: [AuthGuard]
    { path: 'users/:userId', component: QuizUserProfileComponent},

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  
  export class ModeratorRoutingModule {
  }
  
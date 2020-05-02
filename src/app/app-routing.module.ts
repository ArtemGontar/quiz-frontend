import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizUserProfileComponent } from './quiz-user-profile/quiz-user-profile.component';
import { QuizChooseChapterComponent } from './quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizStatisticComponent } from './quiz-statistic/quiz-statistic.component';
import { QuizChooseQuizComponent } from './quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizUserListComponent } from './quiz-user-list/quiz-user-list.component';

const routes: Routes = [
  { path: 'users', component: QuizUserListComponent},
  { path: 'users/:userId', component: QuizUserProfileComponent},
  { path: 'chapters', component: QuizChooseChapterComponent},
  { path: 'chapters/:chapterId/quizzes', component: QuizChooseQuizComponent},
  { path: 'quizzes/:quizId/questions', component: QuizQuestionComponent},
  { path: 'statistics', component: QuizStatisticComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

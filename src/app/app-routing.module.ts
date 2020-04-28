import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizUserProfileComponent } from './quiz-user-profile/quiz-user-profile.component';
import { QuizChooseChapterComponent } from './quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizStatisticComponent } from './quiz-statistic/quiz-statistic.component';
import { QuizChooseQuizComponent } from './quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';


const routes: Routes = [
  { path: 'user-profile', component: QuizUserProfileComponent},
  { path: 'chapters', component: QuizChooseChapterComponent},
  { path: 'quizzes', component: QuizChooseQuizComponent},
  { path: 'questions', component: QuizQuestionComponent},
  { path: 'statistics', component: QuizStatisticComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizChooseChapterComponent } from './quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

const routes: Routes = [
    { path: 'chapters', component: QuizChooseChapterComponent},
    { path: 'chapters/:chapterId/quizzes', component: QuizChooseQuizComponent},
    { path: 'quizzes/:quizId/questions', component: QuizQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
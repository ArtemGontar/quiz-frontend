import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizChooseChapterComponent } from './quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizAddChapterComponent } from './quiz-add-chapter/quiz-add-chapter.component';
import { QuizAddQuizComponent } from './quiz-add-quiz/quiz-add-quiz.component';

const routes: Routes = [
    { path: 'chapters', component: QuizChooseChapterComponent},
    { path: 'chapters/:chapterId/quizzes', component: QuizChooseQuizComponent},
    { path: 'add-chapter', component: QuizAddChapterComponent},
    { path: 'chapters/:chapterId/add-quiz', component: QuizAddQuizComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
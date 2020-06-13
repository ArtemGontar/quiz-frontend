
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizChooseChapterComponent } from './quiz/quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz/quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizAddChapterComponent } from './quiz/quiz-add-chapter/quiz-add-chapter.component';
import { QuizAddQuizComponent } from './quiz/quiz-add-quiz/quiz-add-quiz.component';
import { QuizUserListComponent } from './user/quiz-user-list/quiz-user-list.component';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';
import { QuizEditChapterComponent } from './quiz/quiz-edit-chapter/quiz-edit-chapter.component';
import { QuizEditQuizComponent } from './quiz/quiz-edit-quiz/quiz-edit-quiz.component';

const routes: Routes = [
    { path: 'chapters', component: QuizChooseChapterComponent},
    { path: 'chapters/:chapterId/quizzes', component: QuizChooseQuizComponent},
    { path: 'chapters/add-chapter', component: QuizAddChapterComponent},
    { path: 'chapters/edit-chapter/:chapterId', component: QuizEditChapterComponent},
    { path: 'chapters/:chapterId/quizzes/add-quiz', component: QuizAddQuizComponent},
    { path: 'chapters/:chapterId/quizzes/edit-quiz/:quizId', component: QuizEditQuizComponent},
    { path: 'users', component: QuizUserListComponent}, //canActivate: [AuthGuard]
    { path: 'users/:userId', component: QuizUserProfileComponent},
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
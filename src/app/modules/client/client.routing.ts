import { QuizChooseChapterComponent } from './quiz/quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz/quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizQuestionComponent } from './quiz/quiz-question/quiz-question.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuizUserProfileComponent } from './user/quiz-user-profile/quiz-user-profile.component';
import { QuizCongratsComponent } from './statistic/quiz-congrats/quiz-congrats.component';
import { QuizStatisticComponent } from './statistic/quiz-statistic/quiz-statistic.component';

const routes: Routes = [
    { path: '', redirectTo: 'client'},
    { path: 'chapters', component: QuizChooseChapterComponent},
    { path: 'chapters/:chapterId/quizzes', component: QuizChooseQuizComponent},
    { path: 'chapters/:chapterId/quizzes/:quizId/questions', component: QuizQuestionComponent},
    { path: 'users/:userId', component: QuizUserProfileComponent},//canActivate: [AuthGuard]
    { path: 'user-statistics', component: QuizStatisticComponent},
    { path: 'chapters/:chapterId/quizzes/:quizId/quiz-statistic', component: QuizStatisticComponent},
    { path: 'congrats', component: QuizCongratsComponent},
];
    
    @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    })
    
    export class ClientRoutingModule {
    }
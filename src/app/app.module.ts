import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizTopBarComponent } from './quiz-top-bar/quiz-top-bar.component';
import { QuizUserProfileComponent } from './quiz-user-profile/quiz-user-profile.component';
import { QuizChooseChapterComponent } from './quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizStatisticComponent } from './quiz-statistic/quiz-statistic.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizTopBarComponent,
    QuizUserProfileComponent,
    QuizChooseChapterComponent,
    QuizChooseQuizComponent,
    QuizStatisticComponent,
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

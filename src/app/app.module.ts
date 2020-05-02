import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizTopBarComponent } from './quiz-top-bar/quiz-top-bar.component';
import { QuizUserProfileComponent } from './quiz-user-profile/quiz-user-profile.component';
import { QuizChooseChapterComponent } from './quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizStatisticComponent } from './quiz-statistic/quiz-statistic.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizUserListComponent } from './quiz-user-list/quiz-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizTopBarComponent,
    QuizUserProfileComponent,
    QuizChooseChapterComponent,
    QuizChooseQuizComponent,
    QuizStatisticComponent,
    QuizQuestionComponent,
    QuizUserListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizChooseChapterComponent } from './quiz-choose-chapter/quiz-choose-chapter.component';
import { QuizChooseQuizComponent } from './quiz-choose-quiz/quiz-choose-quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizService } from '../services/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizAddChapterComponent } from './quiz-add-chapter/quiz-add-chapter.component';
import { QuizAddQuizComponent } from './quiz-add-quiz/quiz-add-quiz.component'

@NgModule({
  declarations: [QuizChooseChapterComponent, 
    QuizChooseQuizComponent,
    QuizQuestionComponent,
    QuizAddChapterComponent,
    QuizAddQuizComponent
  ],
  providers: [QuizService],
  imports: [
    QuizRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class QuizModule { }

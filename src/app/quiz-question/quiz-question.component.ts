import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { QuizResult } from '../models/quizResult';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  questions;
  currentQuestionNumber: number = 0;
  quizId: string;
  quizName: string;
  quizResult: QuizResult = {
    answers: []
  };
  constructor(private route: ActivatedRoute,
    private quizService:QuizService) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.quizId = x.quizId;
    });

    this.route.queryParams.subscribe(x => {
      this.quizName = x.quizName;
    });

    this.quizService.getQuestionsByQuizId(this.quizId).subscribe(x => {
      this.questions = x;
    });
  }

  isLastQuestion() {
    if(this.currentQuestionNumber == this.questions.length - 1)
    {
      return true;
    }
    else{
      return false;
    }
  }
  nextQuestion() {
    if((document.querySelectorAll('input[type=radio]:checked').length == 0))
    {
      console.log("Please answer");
    }
    else {
      this.quizResult.answers.push((<HTMLInputElement>document.querySelector('input[type=radio]:checked')).value);
      this.currentQuestionNumber++;
    }
  }

  postResults()
  {
    this.quizResult.answers.push((<HTMLInputElement>document.querySelector('input[type=radio]:checked')).value);
    this.quizService.postQuizResults(this.quizId, this.quizResult);
    console.log("congrats, you pass")
  }
}

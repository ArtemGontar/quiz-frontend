import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz-choose-quiz',
  templateUrl: './quiz-choose-quiz.component.html',
  styleUrls: ['./quiz-choose-quiz.component.scss']
})
export class QuizChooseQuizComponent implements OnInit {
  quizzes: Quiz[] = [
    {
      name: "Past Simple Tense",
      priority: "A0"
    },
    {
      name: "Past Simple Tense",
      priority: "A1"
    },
    {
      name: "Past Simple Tense",
      priority: "A1"
    },
    {
      name: "Past Simple Tense",
      priority: "A1"
    },
    {
      name: "Past Simple Tense",
      priority: "A1"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

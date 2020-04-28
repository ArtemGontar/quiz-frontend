import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  questions: Question[] = [
    {
      text: "Suzie and John are planning to get married and ________ a lot of children.",
      correctAnswer: "have",
      options: [
        "have",
        "bring",
        "make",
        "get"
      ]
    },
    {
      text: "This meat is beautifully ________ - what recipe did you use?",
      correctAnswer: "",
      options: [
        "gentle",
        "tender",
        "mild",
        "soft"
      ]
    },
    {
      text: "It's a great place to live apart from the increasing volume of ________ that passes under my window every day.",
      correctAnswer: "",
      options: [
        "traffic",
        "vehicles",
        "transport",
        "circulation"
      ]
    },
  ];

  quizName: string = "Past Simple Tense"
  constructor() { }

  ngOnInit() {
  }

}

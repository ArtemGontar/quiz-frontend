import { Component, OnInit } from '@angular/core';
import { UserStatistic } from '../../../models/userStatistic';

@Component({
  selector: 'app-quiz-statistic',
  templateUrl: './quiz-statistic.component.html',
  styleUrls: ['./quiz-statistic.component.scss']
})
export class QuizStatisticComponent implements OnInit {

  userStatistic: UserStatistic = {
    averageScoreByQuizPercent: 52,
    passedFailedPercent: 52,
    totalFailedQuestions: 52,
    totalPassedQuestions: 52,
    totalPassedQuizzes: 52,
    englishLevel: "Beginner"
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserStatistic } from '../../../../models/userStatistic';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent implements OnInit {

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

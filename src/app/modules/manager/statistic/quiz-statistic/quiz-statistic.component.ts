import { Component, OnInit } from '@angular/core';
import { UserStatistic } from '../../../../models/userStatistic';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StatisticService } from 'src/app/services/statistic.service';
import { EnglishLevel } from '../../../../models/englishLevel';

@Component({
  selector: 'app-quiz-statistic',
  templateUrl: './quiz-statistic.component.html',
  styleUrls: ['./quiz-statistic.component.scss']
})
export class QuizStatisticComponent implements OnInit {

  userStatistic;
  englishLevels = EnglishLevel;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private statisticService: StatisticService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.statisticService.getUserStatistic(x.userId)
      .subscribe(statistic => {
        this.userStatistic = statistic;
      });
    });
  }
}

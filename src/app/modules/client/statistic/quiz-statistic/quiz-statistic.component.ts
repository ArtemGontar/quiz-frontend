import { Component, OnInit } from '@angular/core';
import { UserStatistic } from '../../../../models/userStatistic';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StatisticService } from 'src/app/services/statistic.service';
import { Subscription } from 'rxjs';
import { EnglishLevel } from '../../../../models/englishLevel';

@Component({
  selector: 'app-quiz-statistic',
  templateUrl: './quiz-statistic.component.html',
  styleUrls: ['./quiz-statistic.component.scss']
})
export class QuizStatisticComponent implements OnInit {
  userId;
  userStatistic;
  userIdSubscription: Subscription;
  englishLevels = EnglishLevel;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private statisticService: StatisticService) { }

  ngOnInit() {
    this.userIdSubscription = this.authService.authNavId$
    .subscribe(id => {
      this.statisticService.getUserStatistic(id)
      .subscribe(statistic => {
        this.userStatistic = statistic
      });
    });
  }

}

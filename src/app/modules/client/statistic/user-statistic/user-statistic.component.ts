import { Component, OnInit } from '@angular/core';
import { UserStatistic } from '../../../../models/userStatistic';
import { ToastrService } from 'ngx-toastr';
import { StatisticService } from 'src/app/services/statistic.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnglishLevel } from '../../../../models/englishLevel';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent implements OnInit {

  lastScoresChartData;
  lastScoresChartLabels;
  quizResultsChartData;
  userIdSubscription: Subscription;
  userStatistic = {};
  englishLevels = EnglishLevel;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private statisticService: StatisticService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.userIdSubscription = this.authService.authNavId$
    .subscribe(id => {
      this.statisticService.getUserStatistic(id)
      .subscribe(statistic => {
        this.userStatistic = statistic;
        this.lastScoresChartData = statistic["lastScoresChartView"].quizScores.map(x => x.score);
        this.lastScoresChartLabels = statistic["lastScoresChartView"].quizScores.map(x => x.title);
        this.quizResultsChartData = [
          statistic["quizResultChartView"].correctAnswers,
          statistic["quizResultChartView"].faliedAnswers]
        this.spinner.hide();
      },
        err => {
          this.toastr.error(err.message)
        });
    });
  }

}

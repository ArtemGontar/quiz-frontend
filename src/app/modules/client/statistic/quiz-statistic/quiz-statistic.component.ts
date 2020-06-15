import { Component, OnInit } from '@angular/core';
import { UserStatistic } from '../../../../models/userStatistic';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StatisticService } from 'src/app/services/statistic.service';
import { Subscription } from 'rxjs';
import { EnglishLevel } from '../../../../models/englishLevel';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-quiz-statistic',
  templateUrl: './quiz-statistic.component.html',
  styleUrls: ['./quiz-statistic.component.scss']
})
export class QuizStatisticComponent implements OnInit {
  userId;
  quizStatistic;
  quizResultsChartData;
  englishLevels = EnglishLevel;
  lastScoresChartData;
  lastScoresChartLabels;
  
  constructor(private route: ActivatedRoute,
    private statisticService: StatisticService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.route.params.subscribe(x => {
      this.statisticService.getQuizStatistic(x.quizId)
      .subscribe(statistic => {
        console.log(statistic);
        this.quizStatistic = statistic;
        this.lastScoresChartData = statistic["lastScoresChartView"].quizScores.map(x => x.score);
        this.lastScoresChartLabels = statistic["lastScoresChartView"].quizScores.map(x => x.title);
        this.quizResultsChartData = [
          statistic["quizResultChartView"].correctAnswers,
          statistic["quizResultChartView"].faliedAnswers]
        
        this.spinner.hide();
      },
        err => this.toastr.error(err));
    });
  }

}

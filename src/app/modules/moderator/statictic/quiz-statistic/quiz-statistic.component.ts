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
  data = [95, 89, 70, 61, 56, 55, 40];
  labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  
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
        this.quizResultsChartData = [
          statistic["quizResultChartView"].correctAnswers,
          statistic["quizResultChartView"].faliedAnswers]
        
        this.spinner.hide();
      },
        err => this.toastr.error(err));
    });
  }

}

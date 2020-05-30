import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StatisticService } from 'src/app/services/statistic.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnglishLevel } from '../../../../models/englishLevel';

@Component({
  selector: 'app-quiz-congrats',
  templateUrl: './quiz-congrats.component.html',
  styleUrls: ['./quiz-congrats.component.scss']
})
export class QuizCongratsComponent implements OnInit {

  quizId: string;
  userId: string;
  quizStatistic;
  userStatistic;
  userIdSubscription: Subscription;
  englishLevels = EnglishLevel;
  userResultsChartData;
  quizLastScoresChartData;
  quizLastScoresChartLabels;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private statisticService: StatisticService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.route.params.subscribe(x => {
      this.statisticService.getQuizStatistic(x.quizId)
      .subscribe(statistic => {
        
        this.quizLastScoresChartData = statistic["lastScoresChartView"].quizScores.map(x => x.score);
        this.quizLastScoresChartLabels = statistic["lastScoresChartView"].quizScores.map(x => x.title);
        this.quizStatistic = statistic;},
        err => this.toastr.error(err));

      this.userIdSubscription = this.authService.authNavId$
      .subscribe(id => {
        this.statisticService.getUserStatisticByQuiz(id, x.quizId)
        .subscribe(statistic => {
          console.log(statistic);
          this.userResultsChartData = [
            statistic["quizResultChartView"].correctAnswers,
            statistic["quizResultChartView"].faliedAnswers]
          this.userStatistic = statistic;
          this.spinner.hide();
        },
          err => this.toastr.error(err));
      });
    });

  }

}

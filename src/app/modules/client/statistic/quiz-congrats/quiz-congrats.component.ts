import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StatisticService } from 'src/app/services/statistic.service';
import { Subscription } from 'rxjs';

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
  
  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private statisticService: StatisticService) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      this.statisticService.getQuizStatistic(x.quizId)
      .subscribe(statistic => {
        this.quizStatistic = statistic;
      });
    });

    this.userIdSubscription = this.authService.authNavId$
    .subscribe(id => {
      this.statisticService.getUserStatistic(id)
      .subscribe(statistic => {
        this.userStatistic = statistic;
      });
    });
  }

}

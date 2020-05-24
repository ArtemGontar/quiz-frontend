import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service'
import { AuthService } from '../../../../services/auth.service';
import { StatisticService } from '../../../../services/statistic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Priority } from '../../../../models/englishLevel';
@Component({
  selector: 'app-quiz-choose-quiz',
  templateUrl: './quiz-choose-quiz.component.html',
  styleUrls: ['./quiz-choose-quiz.component.scss']
})
export class QuizChooseQuizComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private quizService:QuizService,
    private statisticService: StatisticService) { }
  quizzes: Observable<any>;
  priorities = Priority;
  chapterId: string;
  ngOnInit() {
    this.route.params.subscribe(x => 
      this.chapterId = x.chapterId);
    
    this.quizzes = this.quizService.getQuizzesByChapterId(this.chapterId);
    this.authService.loadPermissions([this.authService.role]);
  }

  quizStatistic(quizId){
    this.router.navigate([
      quizId,
      'quiz-statistic'
    ], { relativeTo: this.route });
    this.statisticService.getQuizStatistic(quizId);
  }

}

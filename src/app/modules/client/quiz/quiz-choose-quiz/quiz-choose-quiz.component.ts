import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service'
import { AuthService } from '../../../../services/auth.service';
import { StatisticService } from '../../../../services/statistic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Priority } from '../../../../models/englishLevel';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-quiz-choose-quiz',
  templateUrl: './quiz-choose-quiz.component.html',
  styleUrls: ['./quiz-choose-quiz.component.scss']
})
export class QuizChooseQuizComponent implements OnInit {
  quizzes: any;
  priorities = Priority;
  chapterId: string;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private quizService:QuizService,
    private statisticService: StatisticService,
    private toastr: ToastrService) { }
  
    ngOnInit() {
    this.route.params.subscribe(x => 
      this.chapterId = x.chapterId);
    
    this.quizService.getQuizzesByChapterId(this.chapterId)
    .subscribe(data => this.quizzes = data,
      err => this.toastr.success('Get quizzes failed'));
    ;
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

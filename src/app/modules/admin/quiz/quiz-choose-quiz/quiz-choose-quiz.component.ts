import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Priority } from '../../../../models/englishLevel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-choose-quiz',
  templateUrl: './quiz-choose-quiz.component.html',
  styleUrls: ['./quiz-choose-quiz.component.scss']
})
export class QuizChooseQuizComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private quizService:QuizService,
    private toastr: ToastrService) { }
  quizzes: Observable<any>;
  priorities = Priority;
  chapterId: string;
  ngOnInit() {
    this.route.params.subscribe(x => 
      this.chapterId = x.chapterId);
    
    this.quizzes = this.quizService.getQuizzesByChapterId(this.chapterId);
    this.authService.loadPermissions([this.authService.role]);
  }

  deleteQuiz(quizId){
    this.quizService.deleteQuiz(quizId);
    this.toastr.success('Quiz deleted');
  }


}

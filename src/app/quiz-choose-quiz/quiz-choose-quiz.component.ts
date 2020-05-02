import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-choose-quiz',
  templateUrl: './quiz-choose-quiz.component.html',
  styleUrls: ['./quiz-choose-quiz.component.scss']
})
export class QuizChooseQuizComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
    private quizService:QuizService) { }
  quizzes: Observable<any>;
  chapterId: string;
  ngOnInit() {
    this.route.params.subscribe(x => 
      this.chapterId = x.chapterId);
    
    this.quizzes = this.quizService.getQuizzesByChapterId(this.chapterId);
  }

}

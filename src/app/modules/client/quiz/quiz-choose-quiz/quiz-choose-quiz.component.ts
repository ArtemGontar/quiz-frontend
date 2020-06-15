import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Priority } from '../../../../models/englishLevel';
import { ToastrService } from 'ngx-toastr';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-quiz-choose-quiz',
  templateUrl: './quiz-choose-quiz.component.html',
  styleUrls: ['./quiz-choose-quiz.component.scss']
})
export class QuizChooseQuizComponent implements OnInit {
  
  displayedColumns: string[] = 
  ['title', 
  'priority',
  'actions'];

  dataSource :MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  quizzes: any;
  priorities = Priority;
  chapterId: string;
  chapterName: string;
  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private quizService:QuizService,
    private toastr: ToastrService) { }
  
  ngOnInit() {
    this.route.params.subscribe(x => 
      this.chapterId = x.chapterId);
    
    this.route.queryParams.subscribe(x => {
      this.chapterName = x.chapterName;
    });

    this.quizService.getQuizzesByChapterId(this.chapterId)
    .subscribe(data => {
      this.quizzes = data;
      this.dataSource = new MatTableDataSource<any>(this.quizzes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      err => this.toastr.success('Get quizzes failed'));
    this.authService.loadPermissions([this.authService.role]);
  }

  deleteQuiz(quizId){
    var index = this.quizzes.map(x => {
      return x.Id;
    }).indexOf(quizId);
    
    this.quizzes.splice(index, 1);
    this.quizService.deleteQuiz(quizId);
    this.toastr.success('Quiz deleted');
  }
}

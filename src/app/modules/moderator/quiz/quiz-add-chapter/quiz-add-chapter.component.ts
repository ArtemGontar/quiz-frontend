import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz-add-chapter',
  templateUrl: './quiz-add-chapter.component.html',
  styleUrls: ['./quiz-add-chapter.component.scss']
})
export class QuizAddChapterComponent implements OnInit {
  chapterForm = this.fb.group({
      name: [''],
      level: ['']
  });
  
  constructor(private fb:FormBuilder, 
    private authService: AuthService, 
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit() {
  }

  returnBackClick(){
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  onSubmit() {
    debugger;
    this.quizService.addChapter(this.chapterForm.value);
  }
}

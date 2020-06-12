import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { enumSelector } from 'src/app/utils/enum.functions';
import { EnglishLevel } from 'src/app/models/englishLevel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-add-chapter',
  templateUrl: './quiz-add-chapter.component.html',
  styleUrls: ['./quiz-add-chapter.component.scss']
})
export class QuizAddChapterComponent implements OnInit {
  chapterForm = this.fb.group({
    name: ['', Validators.required],
    englishLevel: [0, Validators.required]
  });;
  englishLevels = EnglishLevel;
  keys;
  constructor(private fb:FormBuilder, 
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
      this.keys = enumSelector(this.englishLevels);
    }
  
  ngOnInit() {
  }

  returnBackClick(){
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  onSubmit() {
    this.quizService.addChapter(this.chapterForm.value);
    this.toastr.success('Chapter created');
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}

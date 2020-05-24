import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { enumSelector } from 'src/app/utils/enum.functions';
import { EnglishLevel } from 'src/app/models/englishLevel';

@Component({
  selector: 'app-quiz-add-chapter',
  templateUrl: './quiz-add-chapter.component.html',
  styleUrls: ['./quiz-add-chapter.component.scss']
})
export class QuizAddChapterComponent implements OnInit {
  chapterForm = this.fb.group({
      name: [''],
      englishLevel: ['']
  });
  englishLevels = EnglishLevel;
  keys;
  constructor(private fb:FormBuilder,
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {  
      this.keys = enumSelector(this.englishLevels);
    }
  

  ngOnInit() {
  }

  returnBackClick(){
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  onSubmit() {
    this.quizService.addChapter(this.chapterForm.value);
  }
}

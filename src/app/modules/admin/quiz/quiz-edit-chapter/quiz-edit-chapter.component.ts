import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../services/quiz.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { enumSelector } from 'src/app/utils/enum.functions';
import { EnglishLevel } from 'src/app/models/englishLevel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-edit-chapter',
  templateUrl: './quiz-edit-chapter.component.html',
  styleUrls: ['./quiz-edit-chapter.component.scss']
})
export class QuizEditChapterComponent implements OnInit {
  chapterForm = this.fb.group({
    name: ['', Validators.required],
    englishLevel: ['', Validators.required]
  });
  chapterId;
  englishLevels = EnglishLevel;
  keys;
  constructor(private fb:FormBuilder, 
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
      this.route.params.subscribe(x => {
        this.chapterId = x.chapterId;
      });
      this.quizService.getChapterById(this.chapterId)
      .subscribe(data => {
        this.chapterForm = this.fb.group({
          name: [data["name"], Validators.required],
          englishLevel: [data["englishLevel"], Validators.required]
        });
      this.keys = enumSelector(this.englishLevels);
      });
    }
  
  ngOnInit() {
  }

  returnBackClick(){
  }

  onSubmit() {
    this.quizService.updateChapter(this.chapterId, this.chapterForm.value);
    this.toastr.success('Chapter edited');
    console.log(this.route);
    console.log(this.router);
  }
}

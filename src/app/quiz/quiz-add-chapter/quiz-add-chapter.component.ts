import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { EnglishLevel } from '../../models/englishLevel';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-quiz-add-chapter',
  templateUrl: './quiz-add-chapter.component.html',
  styleUrls: ['./quiz-add-chapter.component.scss']
})
export class QuizAddChapterComponent implements OnInit {
  chapterForm = this.fb.group({
      name: [''],
      level: ['']
  })
  constructor(private fb:FormBuilder, private quizService: QuizService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.quizService.addChapter(this.chapterForm.value)
    console.warn(this.chapterForm.value);
  }
}

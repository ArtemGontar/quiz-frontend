import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { EnglishLevel } from '../../models/englishLevel';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-quiz-add-chapter',
  templateUrl: './quiz-add-chapter.component.html',
  styleUrls: ['./quiz-add-chapter.component.scss']
})
export class QuizAddChapterComponent implements OnInit {
  chapterForm = new FormGroup({
    name: new FormControl(''),
    level: new FormControl('')
  });
  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.chapterForm.value);
  }
}

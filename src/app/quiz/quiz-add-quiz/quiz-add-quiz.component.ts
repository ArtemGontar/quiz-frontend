import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz-add-quiz',
  templateUrl: './quiz-add-quiz.component.html',
  styleUrls: ['./quiz-add-quiz.component.scss']
})
export class QuizAddQuizComponent implements OnInit {
  chapterId;
  quizForm = this.fb.group({
    title: ['', Validators.required],
    priority: [''],
    chapterId: [this.chapterId],
    questions: this.fb.array([this.getQuestions()])
  });
  constructor(private route: ActivatedRoute,
    private quizService: QuizService, 
    private fb: FormBuilder) { 
      this.route.params.subscribe(x => {
        this.quizForm.patchValue({chapterId: x.chapterId});
      });
    }

  ngOnInit() {
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  getOptionsFor(index) {
    return ( <FormArray> ( <FormArray> this.quizForm.get('questions')).controls[index].get('options')).controls;
  }

  addQuestion(): any {
    this.questions.push(this.getQuestions());
  }

  getQuestions(): any {
    return this.fb.group({
      title: [''],
      options: this.fb.array([this.getOptions()]),
    });
  }

  getOptions(): any {
    return this.fb.group({
      value: ['']
    });
  }

  addOption(questionIndex): any {
    this.getOptionsFor(questionIndex).push(this.getOptions());
  }


  onSubmit() {
    this.quizService.addQuiz(this.quizForm.value);
    console.warn(this.quizForm.value);
  }
}

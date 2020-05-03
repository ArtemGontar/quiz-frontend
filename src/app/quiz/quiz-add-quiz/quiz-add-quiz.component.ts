import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-quiz-add-quiz',
  templateUrl: './quiz-add-quiz.component.html',
  styleUrls: ['./quiz-add-quiz.component.scss']
})
export class QuizAddQuizComponent implements OnInit {
  
  quizForm = this.fb.group({
    name: ['', Validators.required],
    priority: [''],
    questions: this.fb.array([this.getQuestions()])
  });
  constructor(private fb: FormBuilder) { }

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
      name: ['']
    });
  }

  addOption(questionIndex): any {
    this.getOptionsFor(questionIndex).push(this.getOptions());
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.quizForm.value);
  }
}

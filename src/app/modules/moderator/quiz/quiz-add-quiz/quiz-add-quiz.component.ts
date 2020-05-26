import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { QuizService } from '../../../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { enumSelector } from 'src/app/utils/enum.functions';
import { Priority } from 'src/app/models/englishLevel';

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
  priorities = Priority;
  keys;
  constructor(private route: ActivatedRoute,
    private quizService: QuizService, 
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.route.params.subscribe(x => {
        this.quizForm.patchValue({chapterId: x.chapterId});
      });
      
      this.keys = enumSelector(this.priorities);
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
      correctAnswer: ['']
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

  returnBackClick(){
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  onSubmit() {
    this.quizService.addQuiz(this.quizForm.value);
    console.warn(this.quizForm.value);
  }
}

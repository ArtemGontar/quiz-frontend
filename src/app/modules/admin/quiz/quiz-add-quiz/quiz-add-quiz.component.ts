import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { QuizService } from '../../../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Priority } from 'src/app/models/englishLevel';
import { enumSelector } from 'src/app/utils/enum.functions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-add-quiz',
  templateUrl: './quiz-add-quiz.component.html',
  styleUrls: ['./quiz-add-quiz.component.scss']
})
export class QuizAddQuizComponent implements OnInit {
  chapterId;
  quizForm = this.fb.group({
    title: ['', Validators.required],
    priority: [0, Validators.required],
    chapterId: [this.chapterId],
    questions: this.fb.array([this.getQuestions()])
  });
  priorities = Priority;
  keys;
  constructor(private route: ActivatedRoute,
    private quizService: QuizService, 
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { 
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

  getOptionsArrayFor(index) {
    return ( <FormArray> ( <FormArray> this.quizForm.get('questions')).controls[index].get('options')) as FormArray;
  }

  addQuestion(): any {
    this.questions.push(this.getQuestions());
  }

  getQuestions(): any {
    return this.fb.group({
      title: ['', Validators.required],
      options: this.fb.array([this.getOptions()]),
      correctAnswer: ['', Validators.required]
    });
  }

  getOptions(): any {
    return this.fb.group({
      value: ['']
    });
  }

  addOption(questionIndex): any {
    this.getOptionsArrayFor(questionIndex).push(this.getOptions());
  }

  returnBackClick(){
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  onSubmit() {
    console.log(this.quizForm.value);
    this.quizService.addQuiz(this.quizForm.value);
    this.toastr.success('Quiz created');
  }
}

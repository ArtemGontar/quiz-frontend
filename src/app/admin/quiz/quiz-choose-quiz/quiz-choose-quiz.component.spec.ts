import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizChooseQuizComponent } from './quiz-choose-quiz.component';

describe('QuizChooseQuizComponent', () => {
  let component: QuizChooseQuizComponent;
  let fixture: ComponentFixture<QuizChooseQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizChooseQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizChooseQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

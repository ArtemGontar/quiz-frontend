import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAddQuizComponent } from './quiz-add-quiz.component';

describe('QuizAddQuizComponent', () => {
  let component: QuizAddQuizComponent;
  let fixture: ComponentFixture<QuizAddQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAddQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAddQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

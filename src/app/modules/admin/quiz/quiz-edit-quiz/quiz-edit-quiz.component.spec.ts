import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEditQuizComponent } from './quiz-edit-quiz.component';

describe('QuizEditQuizComponent', () => {
  let component: QuizEditQuizComponent;
  let fixture: ComponentFixture<QuizEditQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEditQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEditQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

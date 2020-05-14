import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCongratsComponent } from './quiz-congrats.component';

describe('QuizCongratsComponent', () => {
  let component: QuizCongratsComponent;
  let fixture: ComponentFixture<QuizCongratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCongratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

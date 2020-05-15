import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTopBarComponent } from './moderator-quiz-top-bar.component';

describe('QuizTopBarComponent', () => {
  let component: QuizTopBarComponent;
  let fixture: ComponentFixture<QuizTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

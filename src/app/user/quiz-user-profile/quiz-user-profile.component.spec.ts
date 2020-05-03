import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizUserProfileComponent } from './quiz-user-profile.component';

describe('QuizUserProfileComponent', () => {
  let component: QuizUserProfileComponent;
  let fixture: ComponentFixture<QuizUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

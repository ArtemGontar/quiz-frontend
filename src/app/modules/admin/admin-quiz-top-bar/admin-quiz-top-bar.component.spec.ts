import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuizTopBarComponent } from './admin-quiz-top-bar.component';

describe('QuizTopBarComponent', () => {
  let component: AdminQuizTopBarComponent;
  let fixture: ComponentFixture<AdminQuizTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuizTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuizTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

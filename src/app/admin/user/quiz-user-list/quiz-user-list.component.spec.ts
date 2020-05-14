import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizUserListComponent } from './quiz-user-list.component';

describe('QuizUserListComponent', () => {
  let component: QuizUserListComponent;
  let fixture: ComponentFixture<QuizUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

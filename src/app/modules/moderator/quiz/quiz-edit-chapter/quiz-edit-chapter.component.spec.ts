import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizEditChapterComponent } from './quiz-edit-chapter.component';

describe('QuizEditChapterComponent', () => {
  let component: QuizEditChapterComponent;
  let fixture: ComponentFixture<QuizEditChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizEditChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizEditChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

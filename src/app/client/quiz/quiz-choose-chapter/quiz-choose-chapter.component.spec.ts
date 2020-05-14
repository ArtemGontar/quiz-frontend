import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizChooseChapterComponent } from './quiz-choose-chapter.component';

describe('QuizChooseChapterComponent', () => {
  let component: QuizChooseChapterComponent;
  let fixture: ComponentFixture<QuizChooseChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizChooseChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizChooseChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

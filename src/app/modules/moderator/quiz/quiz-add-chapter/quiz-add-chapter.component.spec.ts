import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAddChapterComponent } from './quiz-add-chapter.component';

describe('QuizAddChapterComponent', () => {
  let component: QuizAddChapterComponent;
  let fixture: ComponentFixture<QuizAddChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAddChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAddChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

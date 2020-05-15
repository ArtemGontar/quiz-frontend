import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerQuizTopBarComponent } from './manager-quiz-top-bar.component';

describe('ManagerQuizTopBarComponent', () => {
  let component: ManagerQuizTopBarComponent;
  let fixture: ComponentFixture<ManagerQuizTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerQuizTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerQuizTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

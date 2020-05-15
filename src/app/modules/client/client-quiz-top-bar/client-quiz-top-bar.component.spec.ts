import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQuizTopBarComponent } from './client-quiz-top-bar.component';

describe('ClientQuizTopBarComponent', () => {
  let component: ClientQuizTopBarComponent;
  let fixture: ComponentFixture<ClientQuizTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientQuizTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientQuizTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

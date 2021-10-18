import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerFunctionalityComponent } from './timer-functionality.component';

describe('TimerFunctionalityComponent', () => {
  let component: TimerFunctionalityComponent;
  let fixture: ComponentFixture<TimerFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerFunctionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

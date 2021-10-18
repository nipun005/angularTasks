import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceTimeStampsComponent } from './timer-service-time-stamps.component';

describe('TimerServiceTimeStampsComponent', () => {
  let component: TimerServiceTimeStampsComponent;
  let fixture: ComponentFixture<TimerServiceTimeStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceTimeStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceTimeStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

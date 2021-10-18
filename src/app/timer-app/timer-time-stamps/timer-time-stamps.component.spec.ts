import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTimeStampsComponent } from './timer-time-stamps.component';

describe('TimerTimeStampsComponent', () => {
  let component: TimerTimeStampsComponent;
  let fixture: ComponentFixture<TimerTimeStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerTimeStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTimeStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

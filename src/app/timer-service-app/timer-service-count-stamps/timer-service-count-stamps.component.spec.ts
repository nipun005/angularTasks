import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceCountStampsComponent } from './timer-service-count-stamps.component';

describe('TimerServiceCountStampsComponent', () => {
  let component: TimerServiceCountStampsComponent;
  let fixture: ComponentFixture<TimerServiceCountStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceCountStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceCountStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCountStampsComponent } from './timer-count-stamps.component';

describe('TimerCountStampsComponent', () => {
  let component: TimerCountStampsComponent;
  let fixture: ComponentFixture<TimerCountStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerCountStampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCountStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

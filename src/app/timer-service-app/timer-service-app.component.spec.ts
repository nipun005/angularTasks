import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceAppComponent } from './timer-service-app.component';

describe('TimerServiceAppComponent', () => {
  let component: TimerServiceAppComponent;
  let fixture: ComponentFixture<TimerServiceAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

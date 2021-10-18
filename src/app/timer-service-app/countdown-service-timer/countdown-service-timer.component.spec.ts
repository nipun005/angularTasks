import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownServiceTimerComponent } from './countdown-service-timer.component';

describe('CountdownServiceTimerComponent', () => {
  let component: CountdownServiceTimerComponent;
  let fixture: ComponentFixture<CountdownServiceTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownServiceTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownServiceTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

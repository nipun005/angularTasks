import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceFunctionalityComponent } from './timer-service-functionality.component';

describe('TimerServiceFunctionalityComponent', () => {
  let component: TimerServiceFunctionalityComponent;
  let fixture: ComponentFixture<TimerServiceFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceFunctionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TimerCountService } from './timer-count.service';

describe('TimerCountService', () => {
  let service: TimerCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

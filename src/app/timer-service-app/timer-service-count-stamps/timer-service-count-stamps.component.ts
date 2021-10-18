import { Component, OnInit } from '@angular/core';
import { TimerData } from '../../timer-app/timerData';
import { TimerCountService } from '../timer-count.service';

@Component({
  selector: 'app-timer-service-count-stamps',
  templateUrl: './timer-service-count-stamps.component.html',
  styleUrls: ['./timer-service-count-stamps.component.css']
})
export class TimerServiceCountStampsComponent implements OnInit {

  started = 0;
  paused = 0;
  timerData?: TimerData;
  isTimerCompleted?: boolean;
  constructor(private service: TimerCountService) {
    this.service.timerValue$.subscribe((timerData: TimerData) => {
      this.timerData = timerData;
      this.checkTimerCount();
    });

    this.service.isTimerComplete$.subscribe((isTimerCompleted: boolean) => {
      this.isTimerCompleted = isTimerCompleted;
      if (isTimerCompleted) {
        this.started = 0;
        this.paused = 0;
      }
    });
  }

  ngOnInit(): void {
  }

  checkTimerCount() {
    if (this.isTimerCompleted) {
      this.started = 0;
      this.paused = 0;
    }
    if (this.timerData && this.timerData.timerStarted && !this.isTimerCompleted) {
      if (this.timerData.timerOn && !this.timerData.reset) {
        this.started++;
      }
      if (!this.timerData.timerOn && !this.timerData.reset) {
        this.paused++;
      }
    }
    if (this.timerData && this.timerData.reset) {
      this.started = 0;
      this.paused = 0;
    }
  }

}

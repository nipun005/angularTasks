import { Component, OnInit } from '@angular/core';
import { TimerData } from '../../timer-app/timerData';
import { TimerCountService } from '../timer-count.service';

@Component({
  selector: 'app-countdown-service-timer',
  templateUrl: './countdown-service-timer.component.html',
  styleUrls: ['./countdown-service-timer.component.css']
})
export class CountdownServiceTimerComponent implements OnInit {

  timerCount?: number = 0;
  data?: string = '';
  previousTime?: number;
  interval: any;
  constructor(private service: TimerCountService) { 
    this.service.timerValue$.subscribe((timerData: TimerData)=> {
      if (timerData && timerData.timerOn && timerData.timerStarted) {
        if (this.previousTime) {
          this.timerCount = this.previousTime;
          this.startTimer();
        } else {
          this.timerCount = timerData.timerValue || 0;
          this.startTimer();
        }
      }
  
      if (timerData && !timerData.timerOn && !timerData.reset) {
        this.previousTime = this.timerCount;
        this.pauseTimer();
      }
  
      if (timerData && !timerData.timerOn && timerData.reset) {
        this.pauseTimer();
        this.timerCount = 0;
        this.previousTime = undefined;
        this.service.isTimerComplete$.next(true);
      }
    })
  }

  ngOnInit(): void {

  }

  startTimer() {
    this.service.isTimerComplete$.next(false);
    this.interval = setInterval(() => {
      if(this.timerCount === 0) {
        this.service.isTimerComplete$.next(true);
        this.pauseTimer();
      }
      this.timerCount && this.timerCount--;
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}

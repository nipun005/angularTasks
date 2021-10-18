import { Component, Input, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { TimerData } from '../timerData';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges {

  @Output() isTimerComplete = new EventEmitter<boolean>();
  @Input() timerValue?: TimerData;
  timerCount?: number = 0;
  data?: string = '';
  previousTime?: number;
  interval: any;
  constructor() { }

  ngOnInit(): void {

  }

  startTimer() {
    this.isTimerComplete.emit(false);
    this.interval = setInterval(() => {
      if(this.timerCount === 0) {
        this.isTimerComplete.emit(true);
        this.pauseTimer();
      }
      this.timerCount && this.timerCount--;
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnChanges() {
    if (this.timerValue && this.timerValue.timerOn && this.timerValue.timerStarted) {
      if (this.previousTime) {
        this.timerCount = this.previousTime;
        this.startTimer();
      } else {
        this.timerCount = this.timerValue.timerValue || 0;
        this.startTimer();
      }
    }

    if (this.timerValue && !this.timerValue.timerOn && !this.timerValue.reset) {
      this.previousTime = this.timerCount;
      this.pauseTimer();
    }

    if (this.timerValue && !this.timerValue.timerOn && this.timerValue.reset) {
      this.pauseTimer();
      this.timerCount = 0;
      this.previousTime = undefined;
      this.isTimerComplete.emit(true);
    }

  }

}

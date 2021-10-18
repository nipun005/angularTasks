import { Component, OnInit } from '@angular/core';
import { TimerData } from './timerData';

@Component({
  selector: 'app-timer-app',
  templateUrl: './timer-app.component.html',
  styleUrls: ['./timer-app.component.css']
})
export class TimerAppComponent implements OnInit {

  timerValue?: TimerData;
  isTimerCompleted = true;
  constructor() { }

  ngOnInit(): void {
  }

  setTimerValue(value: TimerData) {
  this.timerValue = value;
  }

  setTimerStatus(val: boolean) {
    this.isTimerCompleted = val;
  }

}

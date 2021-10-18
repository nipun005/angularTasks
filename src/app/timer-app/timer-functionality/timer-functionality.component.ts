import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TimerData } from '../timerData';

@Component({
  selector: 'app-timer-functionality',
  templateUrl: './timer-functionality.component.html',
  styleUrls: ['./timer-functionality.component.css']
})
export class TimerFunctionalityComponent implements OnInit, OnChanges {

  @Input() isTimerCompleted?: boolean;
  @Output() timerValue = new EventEmitter<TimerData>();
  myMsg: any;
  timerOn = false;
  timerData?: TimerData;
  timerStarted = false;
  disableTextField = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.isTimerCompleted) {
      this.timerStarted = false;
      this.disableTextField = false;
      this.timerOn = false;
    }
  }

  startPauseTimer(val: any) {
    if (val) {
      this.timerStarted = true;
      this.disableTextField = true;
    }
    if (this.timerStarted) {
      this.timerOn = !this.timerOn;
    }
    this.timerData = {
      timerValue: val,
      timerOn: this.timerOn,
      reset: false,
      timerStarted: this.timerStarted
    }
    this.timerValue.emit(this.timerData);
    this.myMsg = undefined;
  }

  resetTimer() {
    this.timerOn = false;
    this.timerStarted = false;
    this.disableTextField = false;
    this.timerData = {
      timerValue: 0,
      timerOn: this.timerOn,
      reset: true,
      timerStarted: this.timerStarted
    }
    this.timerValue.emit(this.timerData);
    this.myMsg = undefined;
  }

}

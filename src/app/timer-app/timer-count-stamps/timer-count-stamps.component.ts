import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TimerData } from '../timerData';

@Component({
  selector: 'app-timer-count-stamps',
  templateUrl: './timer-count-stamps.component.html',
  styleUrls: ['./timer-count-stamps.component.css']
})
export class TimerCountStampsComponent implements OnInit, OnChanges {

  @Input() timerData?: TimerData;
  @Input() isTimerCompleted?: boolean;
  started = 0;
  paused = 0;  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.isTimerCompleted) {
      this.started = 0;
      this.paused = 0;
    }
    if(this.timerData && this.timerData.timerStarted && !this.isTimerCompleted) {
      if(this.timerData.timerOn && !this.timerData.reset) {
        this.started++;
      }
      if(!this.timerData.timerOn && !this.timerData.reset) {
        this.paused++;
      }    
    }
    if(this.timerData && this.timerData.reset) {
      this.started = 0;
      this.paused = 0;
    }
  }

}

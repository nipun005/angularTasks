import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TimerData } from '../timerData';

@Component({
  selector: 'app-timer-time-stamps',
  templateUrl: './timer-time-stamps.component.html',
  styleUrls: ['./timer-time-stamps.component.css']
})
export class TimerTimeStampsComponent implements OnInit, OnChanges {

  @Input() timerData?: TimerData;
  @Input() isTimerCompleted?: boolean;
  timeStamps: string[] = [];
  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.isTimerCompleted) {
      this.timeStamps = [];
    }
    if(this.timerData && this.timerData.timerStarted && !this.isTimerCompleted) {
      if(this.timerData.timerOn && !this.timerData.reset) {
        const date = this.datepipe.transform(new Date(), "dd-MM-yyyy, h:mm:ss a");
        this.timeStamps.push(`Started at ${date}`);
      }
      if(!this.timerData.timerOn && !this.timerData.reset) {
        const date = this.datepipe.transform(new Date(), "dd-MM-yyyy, h:mm:ss a");
        this.timeStamps.push(`Paused at ${date}`);
      }    
    }
    if(this.timerData && this.timerData.reset) {
      this.timeStamps = [];
    }
  }


}

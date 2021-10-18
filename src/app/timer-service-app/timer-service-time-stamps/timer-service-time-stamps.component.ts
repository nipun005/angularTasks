import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TimerData } from 'src/app/timer-app/timerData';
import { TimerCountService } from '../timer-count.service';

@Component({
  selector: 'app-timer-service-time-stamps',
  templateUrl: './timer-service-time-stamps.component.html',
  styleUrls: ['./timer-service-time-stamps.component.css']
})
export class TimerServiceTimeStampsComponent implements OnInit {

  timeStamps: string[] = [];
  timerData?: TimerData;
  isTimerCompleted?: boolean;
  constructor(private datepipe: DatePipe, private service: TimerCountService) {
    this.service.timerValue$.subscribe((timerData: TimerData) => {
      this.timerData = timerData;
      this.checkTimerStamp();
    });

    this.service.isTimerComplete$.subscribe((isTimerCompleted: boolean) => {
      this.isTimerCompleted = isTimerCompleted;
      if(isTimerCompleted) {
        this.timeStamps = [];
      }
    });
   }

  ngOnInit(): void {
  }

  checkTimerStamp() {
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

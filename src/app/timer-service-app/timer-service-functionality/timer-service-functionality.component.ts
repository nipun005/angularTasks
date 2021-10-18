import { Component, OnInit } from '@angular/core';
import { TimerData } from '../../timer-app/timerData';
import { TimerCountService } from '../timer-count.service';

@Component({
  selector: 'app-timer-service-functionality',
  templateUrl: './timer-service-functionality.component.html',
  styleUrls: ['./timer-service-functionality.component.css']
})
export class TimerServiceFunctionalityComponent implements OnInit {

  myMessage: any;
  timerOn = false;
  timerData?: TimerData;
  timerStarted = false;
  disableTextField = false;
  constructor(private service: TimerCountService) {
    this.service.isTimerComplete$.subscribe((isTimerCompleted: boolean)=> {
      if (isTimerCompleted) {
        this.timerStarted = false;
        this.disableTextField = false;
        this.timerOn = false;
      }
    })
   }

  ngOnInit(): void {
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
    this.service.timerValue$.next(this.timerData);
    this.myMessage = undefined;
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
    this.service.timerValue$.next(this.timerData);
    this.myMessage = undefined;
  }
  
}

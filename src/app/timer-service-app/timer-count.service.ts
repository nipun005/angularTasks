import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TimerData } from '../timer-app/timerData';

@Injectable({
  providedIn: 'root'
})
export class TimerCountService {

  isTimerComplete$ = new Subject<boolean>();
  timerValue$ = new Subject<TimerData>();
  constructor() { }
}

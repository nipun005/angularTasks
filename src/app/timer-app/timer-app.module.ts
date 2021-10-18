import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimerAppComponent } from './timer-app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerCountStampsComponent } from './timer-count-stamps/timer-count-stamps.component';
import { TimerFunctionalityComponent } from './timer-functionality/timer-functionality.component';
import { TimerTimeStampsComponent } from './timer-time-stamps/timer-time-stamps.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimerAppComponent,
    CountdownTimerComponent,
    TimerCountStampsComponent,
    TimerFunctionalityComponent,
    TimerTimeStampsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class TimerAppModule { }

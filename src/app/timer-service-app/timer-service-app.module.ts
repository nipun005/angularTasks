import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerServiceAppComponent } from './timer-service-app.component';
import { CountdownServiceTimerComponent } from './countdown-service-timer/countdown-service-timer.component';
import { TimerServiceCountStampsComponent } from './timer-service-count-stamps/timer-service-count-stamps.component';
import { TimerServiceFunctionalityComponent } from './timer-service-functionality/timer-service-functionality.component';
import { TimerServiceTimeStampsComponent } from './timer-service-time-stamps/timer-service-time-stamps.component';
import { TimerCountService } from './timer-count.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TimerServiceAppComponent, CountdownServiceTimerComponent, TimerServiceCountStampsComponent, TimerServiceFunctionalityComponent, TimerServiceTimeStampsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TimerCountService]
})
export class TimerServiceAppModule { }

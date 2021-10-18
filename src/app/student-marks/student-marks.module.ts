import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarksComponent } from './student-marks.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsDataService } from './service/students-data.service';



@NgModule({
  declarations: [StudentMarksComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [StudentsDataService]
})
export class StudentMarksModule { }

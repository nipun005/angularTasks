import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  studentData: Students[] = [];
  constructor(private http: HttpClient) { }

  fetchStudentData$(): Observable<Students[]> {

    return this.http.get<Students[]>("assets/students.json");
  }

  setStudentData(value: Students[]) {
    this.studentData = value;
  }

  getStudentData() {
    return this.studentData;
  }

}

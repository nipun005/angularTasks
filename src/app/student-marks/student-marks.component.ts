import { Component, OnInit } from '@angular/core';
import { Students } from './service/students';
import { StudentsDataService } from './service/students-data.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {

  nameClickCount = 0;
  classClickCount = 0;
  sectionClickCount = 0;
  subOneClickCount = 0;
  subTwoClickCount = 0;
  subThreeClickCount = 0;
  studentsData: Students[] = [];
  globalStudentsData: Students[] = [];
  constructor(private service: StudentsDataService) { }

  ngOnInit(): void {

    this.service.fetchStudentData$().subscribe((data: Students[]) => {
      this.globalStudentsData = [...data];
      this.studentsData = data;
      this.service.setStudentData(this.globalStudentsData);
    })
  }

  sortName() {
    this.classClickCount = this.sectionClickCount = this.subOneClickCount = this.subTwoClickCount = this.subThreeClickCount = 0;
    this.nameClickCount++;
    if (this.nameClickCount === 1) {
      this.studentsData.sort((a, b) => {
        return b.name > a.name ? -1 : 1;
      })
    }
    if (this.nameClickCount === 2) {
      this.studentsData.sort((a, b) => {
        return a.name > b.name ? -1 : 1;
      })
    }
    if (this.nameClickCount === 3) {
      this.studentsData = [...this.globalStudentsData];
      this.nameClickCount = 0;
    }
  }

  sortClass() {
    this.nameClickCount = this.sectionClickCount = this.subOneClickCount = this.subTwoClickCount = this.subThreeClickCount = 0;
    this.classClickCount++;
    if (this.classClickCount === 1) {
      this.studentsData.sort((a, b) => {
        return b.class > a.class ? -1 : 1;
      })
    }
    if (this.classClickCount === 2) {
      this.studentsData.sort((a, b) => {
        return a.class > b.class ? -1 : 1;
      })
    }
    if (this.classClickCount === 3) {
      this.studentsData = [...this.globalStudentsData];
      this.classClickCount = 0;
    }
  }

  sortSection() {
    this.classClickCount = this.nameClickCount = this.subOneClickCount = this.subTwoClickCount = this.subThreeClickCount = 0;
    this.sectionClickCount++;
    if (this.sectionClickCount === 1) {
      this.studentsData.sort((a, b) => {
        return b.section > a.section ? -1 : 1;
      })
    }
    if (this.sectionClickCount === 2) {
      this.studentsData.sort((a, b) => {
        return a.section > b.section ? -1 : 1;
      })
    }
    if (this.sectionClickCount === 3) {
      this.studentsData = [...this.globalStudentsData];
      this.sectionClickCount = 0;
    }
  }

  sortSubjectOne() {
    this.classClickCount = this.sectionClickCount = this.nameClickCount = this.subTwoClickCount = this.subThreeClickCount = 0;
    this.subOneClickCount++;
    if (this.subOneClickCount === 1) {
      this.studentsData.sort((a, b) => {
        return b.subject1 > a.subject1 ? -1 : 1;
      })
    }
    if (this.subOneClickCount === 2) {
      this.studentsData.sort((a, b) => {
        return a.subject1 > b.subject1 ? -1 : 1;
      })
    }
    if (this.subOneClickCount === 3) {
      this.studentsData = [...this.globalStudentsData];
      this.subOneClickCount = 0;
    }
  }

  sortSubjectTwo() {
    this.classClickCount = this.sectionClickCount = this.subOneClickCount = this.nameClickCount = this.subThreeClickCount = 0;
    this.subTwoClickCount++;
    if (this.subTwoClickCount === 1) {
      this.studentsData.sort((a, b) => {
        return b.subject2 > a.subject2 ? -1 : 1;
      })
    }
    if (this.subTwoClickCount === 2) {
      this.studentsData.sort((a, b) => {
        return a.subject2 > b.subject2 ? -1 : 1;
      })
    }
    if (this.subTwoClickCount === 3) {
      this.studentsData = [...this.globalStudentsData];
      this.subTwoClickCount = 0;
    }
  }

  sortSubjectThree() {
    this.classClickCount = this.sectionClickCount = this.subOneClickCount = this.subTwoClickCount = this.nameClickCount = 0;
    this.subThreeClickCount++;
    if (this.subThreeClickCount === 1) {
      this.studentsData.sort((a, b) => {
        return b.subject3 > a.subject3 ? -1 : 1;
      })
    }
    if (this.subThreeClickCount === 2) {
      this.studentsData.sort((a, b) => {
        return a.subject3 > b.subject3 ? -1 : 1;
      })
    }
    if (this.subThreeClickCount === 3) {
      this.studentsData = [...this.globalStudentsData];
      this.subThreeClickCount = 0;
    }
  }

}

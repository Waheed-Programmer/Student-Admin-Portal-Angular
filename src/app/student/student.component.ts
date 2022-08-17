import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Infrastructure/student';
import { student } from '../Infrastructure/student.interface';

import { StudentService } from '../studentservice/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  ShowEditMode : boolean = false;
  getstudents: student[] = [];
  dtOptions: DataTables.Settings = {};
  studentObj: Student = new Student();
  constructor(private studentservice: StudentService,  private router: Router) {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25],
      processing: true
    };
    this.studentservice.getAllStudent().subscribe((studentData) => {
      this.getstudents = studentData;

    });


  }
  Edit(id : number) : void
  {
    this.router.navigate(['/student/',this.studentObj.studentId=id])
  }


  DeleteStudent(id:number):void{
    debugger
    if(window.confirm('Are sure you want to delete this item ?')) {
    this.studentservice
    .deleteStudent(this.studentObj.studentId=id)
    .subscribe(
      (response) => {
        let s = response;
        this.router.navigate(['/student'])
      }
    );
  }
}
}

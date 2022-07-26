import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Student } from '../Infrastructure/student';
import { student } from '../Infrastructure/student.interface';

import { StudentService } from '../studentservice/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {

  getstudents: student[] = [];
  FilterText: string = '';
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

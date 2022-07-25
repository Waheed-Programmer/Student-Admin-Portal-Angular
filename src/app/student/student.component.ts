import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private studentservice: StudentService) {}
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
}

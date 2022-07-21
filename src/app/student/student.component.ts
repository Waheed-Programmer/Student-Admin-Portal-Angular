import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
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


  constructor(private studentservice: StudentService) {}
  ngOnInit(): void {

    this.studentservice.getAllStudent().subscribe((studentData) => {
      this.getstudents = studentData;

    });
  }
}

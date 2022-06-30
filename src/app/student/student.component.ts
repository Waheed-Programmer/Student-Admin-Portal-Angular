import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { student } from '../Infrastructure/student.interface';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  value = "Clear Me";
  getstudents:student[] =[];
  displayedColumns: string[] = ['Student Name', 'Student Email', 'Student Contact'];
  dataSource:MatTableDataSource<student> = new  MatTableDataSource<student>();

  constructor(private studentservice: StudentService) { }
  ngOnInit(): void {
    this.studentservice.getAllStudent().subscribe(
      (studentData)=>{
        debugger
        this.getstudents = studentData;
        this.dataSource = new MatTableDataSource<student>(this.getstudents);
        this.dataSource = this.dataSource;
      }
    )
  }

}

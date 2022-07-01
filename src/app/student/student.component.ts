import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { student } from '../Infrastructure/student.interface';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  getstudents:student[] =[];
  displayedColumns: string[] = ['Student Name', 'Student Email', 'Student Contact','edit'];
  dataSource:MatTableDataSource<student> = new  MatTableDataSource<student>();
  @ViewChild(MatPaginator) matpaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  FilterText:string='';

  constructor(private studentservice: StudentService) { }
  ngOnInit(): void {
    this.studentservice.getAllStudent().subscribe(
      (studentData)=>{
        debugger
        this.getstudents = studentData;
        this.dataSource = new MatTableDataSource<student>(this.getstudents);
       //add paginations
        if(this.matpaginator){
        this.dataSource.paginator = this.matpaginator;
       }
       //Add sort system
       if(this.matSort){
        this.dataSource.sort = this.matSort;
       }
      }
    )
  }

  FilterStudent(){
    this.dataSource.filter = this.FilterText;
  }

}

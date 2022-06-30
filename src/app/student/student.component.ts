import { Component, OnInit } from '@angular/core';
import { student } from '../Infrastructure/student.interface';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentservice: StudentService) { }
  getstudents:student[] =[];
  ngOnInit(): void {
    this.studentservice.getAllStudent().subscribe(
      (studentData)=>{
        this.getstudents = studentData;
        console.log(this.getstudents[0].StudentName)
      }
    )
  }

}

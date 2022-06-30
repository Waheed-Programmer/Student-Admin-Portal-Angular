import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/studentservice/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  Id:string|null|undefined;
  constructor(private studentservice: StudentService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.Id = params.get('id')
    });
    if(this.Id){
      this.studentservice.getStudent(this.Id).subscribe((data)=>{

      })
    }
  }

}

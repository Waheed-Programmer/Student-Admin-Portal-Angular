import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/Infrastructure/student.interface';
import { StudentService } from 'src/app/studentservice/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  Id:string|null|undefined;
  studentData:student={
    StudentId: 0,
    StudentName:'',
    StudentEmail: '',
    StudentContact: '',
    ProfileImg: '',
    GenderId: 0,
    Address:{
    AddressId:0,
    PhysicalAddress: '',
    PostalAddress: '',
    } ,
    Gender:{
      GenderId: 0,
    GenderName: '',
    GenderDesc:''
    }
  }


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

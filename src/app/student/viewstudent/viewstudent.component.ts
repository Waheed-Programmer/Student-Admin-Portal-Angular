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
    studentId: 0,
    studentName:'',
    studentEmail: '',
    studentContact: '',
    profileImg: '',
    genderId: 0,
    address:{
    addressId:0,
    physicalAddress: '',
    postalAddress: '',
    } ,
    gender:{
      genderId: 0,
    genderName: '',
    genderDesc:''
    }
  }


  constructor(private studentservice: StudentService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.Id = params.get('id')
    });
    if(this.Id){
      debugger
      this.studentservice.getStudent(this.Id).subscribe((data)=>{
      this.studentData = data;
      })
    }
  }

}

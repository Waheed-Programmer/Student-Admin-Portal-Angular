import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/app/Infrastructure/gender.interface';
import { student } from 'src/app/Infrastructure/student.interface';
import { StudentService } from 'src/app/studentservice/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css'],
})
export class ViewstudentComponent implements OnInit {

  genderList: Gender[] = [];
  stage: string | null | undefined;
  studentData: student = {
    studentId: 0,
    studentName: '',
    studentEmail: '',
    studentContact: '',
    profileImg: '',
    genderId: 0,
    addressId:0,
    address: {
      addressId: 0,
      physicalAddress: '',
      postalAddress: '',
    },
    gender: {
      genderId: 0,
      genderName: '',
      genderDesc: '',
    },
  };
  isNew = false;
  headerLabel = '';
  constructor(
    private studentservice: StudentService,
    private route: ActivatedRoute,
    private snakbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Load list of gender through this line of code

    this.studentservice.getAllGender().subscribe((loadGender) => {
      this.genderList = loadGender;
    });

    this.route.paramMap.subscribe((params) => {
      this.stage = params.get('id');
    });
    if (this.stage) {
      if(this.stage){
        debugger
        if(this.stage.toLowerCase()=="Add".toLocaleLowerCase()){
          this.isNew = true;
          this.headerLabel = "Add Student"
        }
        else{
          this.isNew= false;
          this.headerLabel = "Update Student"

        }
      }
      this.studentservice.getStudent(this.stage).subscribe((data) => {
        this.studentData = data;
      });
    }
  }

  UpdateStudent(): void {
    debugger
    this.studentservice
      .updateStudent(this.studentData.studentId, this.studentData)
      .subscribe(
        (response) => {
          let s = response;
          this.router.navigate(['/student'])
        }
      );
  }

  DeleteStudent():void{
    this.studentservice
    .deleteStudent(this.studentData.studentId)
    .subscribe(
      (response) => {
        let s = response;
        this.router.navigate(['/student'])
      }
    );
  }

  AddStudent():void{
    debugger
    this.studentservice
      .insertStudent(this.studentData)
      .subscribe(
        (response) => {
          let s = response;
          this.router.navigate(['/student'])
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  Id: string | null | undefined;
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

  constructor(
    private studentservice: StudentService,
    private route: ActivatedRoute,
    private snakbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //Load list of gender through this line of code

    this.studentservice.getAllGender().subscribe((loadGender) => {
      this.genderList = loadGender;
    });

    this.route.paramMap.subscribe((params) => {
      this.Id = params.get('id');
    });
    if (this.Id) {
      this.studentservice.getStudent(this.Id).subscribe((data) => {
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
        }
      );
  }
}

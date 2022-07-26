import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/Infrastructure/country.interface';
import { Department } from 'src/app/Infrastructure/department.interface';
import { Gender } from 'src/app/Infrastructure/gender.interface';
import { Student } from 'src/app/Infrastructure/student';
import { StudentService } from 'src/app/studentservice/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css'],
})
export class ViewstudentComponent implements OnInit {
  genderList: Gender[] = [];
  departmentList: Department[] = [];
  countryList: Country[] = [];
  stage: string | null | undefined;

  isNew = false;
  headerLabel = '';

  studentObj: Student = new Student();

  constructor(
    private studentservice: StudentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Load list of gender through this line of code

    this.studentservice.getAllGender().subscribe((loadGender) => {
      debugger;
      this.genderList = loadGender;
    });

    //Load list of Department through this line of code
    this.studentservice.getAllDepartment().subscribe((loadDepartment) => {
      debugger;
      this.departmentList = loadDepartment;
    });

    //Load list of Counrty through this line of code
    this.studentservice.getAllCountry().subscribe((loadCountry) => {
      debugger;
      this.countryList = loadCountry;
      this._patchValues();
    });

    this.route.paramMap.subscribe((params) => {
      this.stage = params.get('id');
    });
    if (this.stage) {
      if (this.stage) {
        debugger;
        if (this.stage.toLowerCase() == 'Add'.toLocaleLowerCase()) {
          this.isNew = true;
          this.headerLabel = 'Add Student';
        } else {
          this.isNew = false;
          this.headerLabel = 'Update Student';
        }
      }
      debugger;
      this.studentservice.getStudent(this.stage).subscribe((data) => {
        this.studentObj = data;
      });
    }
  }
  studentForm = this.fb.group({
    studentId: [''],
    studentName: ['', Validators.required],
    studentEmail: ['', Validators.required],
    studentContact: ['', Validators.required],
    genderId: ['', Validators.required],
    departmentId: ['', Validators.required],
    countryId: new FormArray([]),
    date: ['', Validators.required],
  });

  get date() {
    return this.studentForm.get('date');
  }
  get studentName() {
    return this.studentForm.get('studentName');
  }
  get studentEmail() {
    return this.studentForm.get('studentEmail');
  }
  get studentContact() {
    return this.studentForm.get('studentContact');
  }
  get departmentId() {
    return this.studentForm.get('departmentId');
  }
  get countryId() {
    return this.studentForm.get('countryId') as FormArray;
  }
  get genderId() {
    return this.studentForm.get('genderId');
  }

  UpdateStudent(stu: Student): void {
    this.studentForm.controls['studentId'].setValue(stu.studentId);
    this.studentForm.controls['studentName'].setValue(stu.studentName);
    this.studentForm.controls['studentEmail'].setValue(stu.studentEmail);
    this.studentForm.controls['studentContact'].setValue(stu.studentContact);
    this.studentForm.controls['genderId'].setValue(stu.genderId);
    this.studentForm.controls['departmentId'].setValue(stu.departmentId);
    this.studentForm.controls['date'].setValue(stu.date);

    // this.studentservice
    //   .updateStudent(this.studentData.studentId, this.studentData)
    //   .subscribe(
    //     (response) => {
    //       debugger
    //       let s = response;
    //       this.router.navigate(['/student'])
    //     }
    //   );
  }



  private _patchValues(): void {
    // get array control
    const formArray = this.studentForm.get('countryId') as FormArray;
    // loop for each existing value
    this.countryList.forEach((country) => {
      // add new control to FormArray
      this.countryId.push(
        // here the new FormControl with item value from RADIO_LIST_FROM_DATABASE
        new FormGroup({
          countryId: new FormControl(country.countryId),
          countryName: new FormControl(country.countryName),
          checked: new FormControl(false),
        })
      );
    });
  }

  AddStudent(): void {
    this.studentObj.studentId = this.studentForm.value.studentId;
    this.studentObj.studentName = this.studentForm.value.studentName;
    this.studentObj.studentEmail = this.studentForm.value.studentEmail;
    this.studentObj.studentContact = this.studentForm.value.studentContact;
    this.studentObj.genderId = this.studentForm.value.genderId;
    this.studentObj.departmentId = this.studentForm.value.departmentId;
    this.studentObj.countryId = this.studentForm.value.countryId
      .filter((y: any) => y.checked)
      .map((x: any) => x.countryId)
      .join(',');
    this.studentObj.date = this.studentForm.value.date;
    debugger;
    if (this.studentForm.valid) {
      this.studentservice
        .insertStudent(this.studentObj)
        .subscribe((response) => {
          let s = response;
          this.router.navigate(['/student']);
        });
    }
  }
}

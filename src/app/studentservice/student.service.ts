import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Infrastructure/country.interface';
import { Department } from '../Infrastructure/department.interface';
import { Gender } from '../Infrastructure/gender.interface';
import { Student } from '../Infrastructure/student';
import { student } from '../Infrastructure/student.interface';
import { StudentViewModel } from '../Infrastructure/studentViewModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly BaseUrl = "https://localhost:5001/api";
  constructor(private httpClient:HttpClient) { }

  //Fetch data all students from data base
  getAllStudent():Observable<student[]>
  {
    return this.httpClient.get<student[]>(this.BaseUrl + '/Student/GetListStudent')
  }

  //Update student from data base
  updateStudent(id:number, studentmodel:Student):Observable<Student>{
    debugger
    // const ViewModel:StudentViewModel={

    //   studentName: studentmodel.studentName,
    //   studentEmail: studentmodel.studentEmail,
    //   studentContact: studentmodel.studentContact,
    //   date: studentmodel.date,
    //   genderId: studentmodel.genderId,

    //   departmentId:studentmodel.department.departmentId,

    //   countryId: studentmodel.country.countryId,

    //   studentId: studentmodel.studentId,

    // }
    return this.httpClient.put<Student>(this.BaseUrl + '/Student/updateStudent/'+id,studentmodel)
  }

  //Add new student

  insertStudent(studentmodel:Student):Observable<Student>{
    debugger
    // const ViewModel:StudentViewModel={
    //   studentName: studentmodel.studentName,
    //   studentEmail: studentmodel.studentEmail,
    //   studentContact: studentmodel.studentContact,
    //   date: studentmodel.date,
    //   genderId: studentmodel.genderId,

    //   departmentId:studentmodel.departmentId,

    //   countryId: studentmodel.countryId,

    //   studentId: 0,

    // }
    return this.httpClient.post<Student>(this.BaseUrl + '/Student/addStudent',studentmodel)



  }
  //Fetch data for single student
  getStudent(Id:string|number):Observable<Student>
  {
    return this.httpClient.get<Student>(this.BaseUrl + '/Student/GetStudent/'+Id)
  }

  //Delete Student data
  deleteStudent(Id:number):Observable<Student>
  {
    return this.httpClient.delete<Student>(this.BaseUrl + '/Student/deleteStudent/'+Id)
  }
  //Fetch data all Gender from data base
  getAllGender():Observable<Gender[]>
  {
    return this.httpClient.get<Gender[]>(this.BaseUrl + '/Gender/GetListGender')
  }

  //Fetch data all Department from data base
  getAllDepartment():Observable<Department[]>
  {
    return this.httpClient.get<Department[]>(this.BaseUrl + '/Departments/GetListDepartment')
  }

  //Fetch data all Country from data base
  getAllCountry():Observable<Country[]>
  {
    return this.httpClient.get<Country[]>(this.BaseUrl + '/Country/GetListCountry')
  }



}

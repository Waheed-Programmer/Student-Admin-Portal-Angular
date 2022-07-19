import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Infrastructure/country.interface';
import { Department } from '../Infrastructure/department.interface';
import { Gender } from '../Infrastructure/gender.interface';
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
  updateStudent(id:number, studentmodel:student):Observable<student>{
    debugger
    const ViewModel:StudentViewModel={

      studentName: studentmodel.studentName,
      studentEmail: studentmodel.studentEmail,
      studentContact: studentmodel.studentContact,
      genderId: studentmodel.genderId,
      genderName: studentmodel.gender.genderName,
      departmentId:studentmodel.department.departmentId,
      departmentName:studentmodel.department.departmentName,
      countryId: studentmodel.country.countryId,
      countryName:studentmodel.country.countryName,
      studentId: studentmodel.studentId,

    }
    return this.httpClient.put<student>(this.BaseUrl + '/Student/updateStudent/'+id,ViewModel)
  }

  //Add new student

  insertStudent(studentmodel:student):Observable<student>{
    debugger
    const ViewModel:StudentViewModel={
      studentName: studentmodel.studentName,
      studentEmail: studentmodel.studentEmail,
      studentContact: studentmodel.studentContact,
      genderId: studentmodel.genderId,
      genderName: studentmodel.gender.genderName,
      departmentId:studentmodel.department.departmentId,
      departmentName:studentmodel.department.departmentName,
      countryId: studentmodel.country.countryId,
      countryName:studentmodel.country.countryName,
      studentId: 0,

    }
    return this.httpClient.post<student>(this.BaseUrl + '/Student/addStudent/',ViewModel)



  }
  //Fetch data for single student
  getStudent(Id:string|number):Observable<student>
  {
    return this.httpClient.get<student>(this.BaseUrl + '/Student/GetStudent/'+Id)
  }

  //Delete Student data
  deleteStudent(Id:number):Observable<student>
  {
    return this.httpClient.delete<student>(this.BaseUrl + '/Student/deleteStudent/'+Id)
  }
  //Fetch data all Gender from data base
  getAllGender():Observable<Gender[]>
  {
    return this.httpClient.get<Gender[]>(this.BaseUrl + '/Gender/GetListGender')
  }

  //Fetch data all Department from data base
  getAllDepartment():Observable<Department[]>
  {
    return this.httpClient.get<Department[]>(this.BaseUrl + '/Department/GetListDepartment')
  }

  //Fetch data all Country from data base
  getAllCountry():Observable<Country[]>
  {
    return this.httpClient.get<Country[]>(this.BaseUrl + '/Country/GetListCountry')
  }



}

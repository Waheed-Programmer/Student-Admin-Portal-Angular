import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../Infrastructure/gender.interface';
import { student } from '../Infrastructure/student.interface';

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

  //Fetch data for single student
  getStudent(Id:string):Observable<student>
  {
    return this.httpClient.get<student>(this.BaseUrl + '/Student/GetStudent/'+Id)
  }

  //Fetch data all Gender from data base
  getAllGender():Observable<Gender[]>
  {
    return this.httpClient.get<Gender[]>(this.BaseUrl + '/Gender/GetListGender')
  }

}

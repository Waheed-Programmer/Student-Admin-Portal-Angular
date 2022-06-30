import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
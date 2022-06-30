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

  getAllStudent():Observable<student[]>
  {
    return this.httpClient.get<student[]>(this.BaseUrl + '/Student/GetListStudent')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private BaseUrl = "https://localhost:5001/api/";
  constructor(private httpClient:HttpClient) { }

  getAllStudent():Observable<any>
  {
    return this.httpClient.get<any>(this.BaseUrl + '/Student/GetListStudent')
  }
}

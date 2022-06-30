import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private BasicUrl = "https://localhost:5001/api/";
  constructor() { }
}

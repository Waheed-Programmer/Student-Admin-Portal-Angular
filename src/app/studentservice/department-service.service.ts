import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  readonly BaseUrl = "https://localhost:5001/api";
  constructor(private httpClient:HttpClient) { }

   //Fetch data all Department from data base
   getAllDepartment()
   {
     return this.httpClient.get(this.BaseUrl + '/Departments/getListDepartment')
   }

   //Add new Department

  insertDepartment(departmentmodel:any){
    debugger

    return this.httpClient.post(this.BaseUrl + '/Departments/addDepartment',departmentmodel)
  }

  //Fetch data for single Department
  getDepartment(Id:any)
  {
    return this.httpClient.get(this.BaseUrl + '/Departments/GetDepartment/'+Id)
  }

  //Update Department from data base
  updateDepartment(id:number, Departmentmodel:any){

    return this.httpClient.put(this.BaseUrl + '/Departments/updateDepartment/'+id,Departmentmodel)
  }
}

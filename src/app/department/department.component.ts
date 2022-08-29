import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentFormComponent } from '../department-form/department-form.component';
import { DepartmentServiceService } from '../studentservice/department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private service: DepartmentServiceService) { }
  departList:any;
  @ViewChild(DepartmentFormComponent) UpdateView! : DepartmentFormComponent


  ngOnInit(): void {
    this.getDepartmentList()
  }
  getDepartmentList(){
    debugger
    this.service.getAllDepartment().subscribe(result=>{
      this.departList =result;
    })
  }

  EditFunction(Id:any){
    debugger
    console.log(Id);
    this.UpdateView.loadEdit(Id);
  }


}

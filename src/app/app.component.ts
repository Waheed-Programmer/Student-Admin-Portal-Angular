import { Component ,NgModule, ViewChild} from '@angular/core';
import { EmployeComponent } from './employe/employe.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild (EmployeComponent) viewData!: EmployeComponent;
  title = 'Out-Put-Data';


  inputName:any;
  inputEmail:any;
  inputAge:any;
  response:any;
  inputObj:any={"name":"","email":"","age":""}


  PassParentData(name:any,email:any,age:any){
    debugger
    this.inputObj = {"name":name,"email":email,"age":age}
   this.response =this.viewData.update(this.inputObj)
  }

  changeTitle(title:any){
    this.title = title;
  }
}

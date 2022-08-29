import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';


const routes: Routes = [
{
  path:"",redirectTo:"",pathMatch:"full"
  // {path:'**',component:PagenotfoundComponent}
},

{
  path: "student",
  component:StudentComponent
},
{
  path: "student/:id",
  component:ViewstudentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

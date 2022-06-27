import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeAboutComponent } from './employe-about/employe-about.component';
import { EmployeComponent } from './employe/employe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent,path:""},
  {component:AboutComponent,path:"About"},
  {component:ContactComponent,path:"Contact"},
  {component:EmployeComponent,path:"Employee",children:[{component:EmployeAboutComponent,path:"company"}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { Country } from "./country.interface";
import { Department } from "./department.interface";
import { Gender } from "./gender.interface";



export interface student{
  studentId: number,
  studentName:string,
  studentEmail: string,
  studentContact: string,
  genderId: number,
  date:any,
  gender: Gender
  departmentId: number,
  department: Department,
  countryId: number,
  country: Country,
}

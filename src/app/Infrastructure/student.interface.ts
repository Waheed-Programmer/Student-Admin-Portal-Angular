
import { Country } from "./country.interface";
import { Department } from "./department.interface";
import { Gender } from "./gender.interface";



export interface student{
  studentId: number,
  studentName:string,
  studentEmail: string,
  studentContact: string,
  profileImg: string,
  genderId: number,
  departmentId: number,
  department: Department,
  country: Country,
  gender: Gender
}

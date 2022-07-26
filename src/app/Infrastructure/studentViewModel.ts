import { Gender } from "./gender.interface";

export interface StudentViewModel{
  studentId: number,
  studentName:string,
  studentEmail: string,
  studentContact: string,
  date:string,
  genderId: number,
  departmentId: number,
  countryId: number
}

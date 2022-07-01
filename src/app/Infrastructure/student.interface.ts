import { Address } from "./address.interface";
import { Gender } from "./gender.interface";



export interface student{
  studentId: number,
  studentName:string,
  studentEmail: string,
  studentContact: string,
  profileImg: string,
  genderId: number,
  address: Address,
  gender: Gender
}

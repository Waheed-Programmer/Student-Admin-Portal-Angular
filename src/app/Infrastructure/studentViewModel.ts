import { Address } from "./address.interface";
import { Gender } from "./gender.interface";

export interface StudentViewModel{
  studentId: number,
  studentName:string,
  studentEmail: string,
  studentContact: string,
  profileImg: string,
  genderId: number,
  genderName: string,
  addressId: number,
  physicalAddress: string,
  postalAddress: string,

}

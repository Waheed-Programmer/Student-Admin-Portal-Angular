import { Address } from "./address.interface";
import { Gender } from "./gender.interface";



export interface student{
  StudentId: number,
  StudentName:string,
  StudentEmail: string,
  StudentContact: string,
  ProfileImg: string,
  GenderId: number,
  Address: Address,
  Gender: Gender
}

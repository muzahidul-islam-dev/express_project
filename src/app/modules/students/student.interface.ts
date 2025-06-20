import { Model, Types } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export type TStudent = {
  id: string;
  name: TUserName,
  password: string;
  user: Types.ObjectId;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  avatar?: string;
  contactNo: string;
  emergencycontactNo: string;
  bloodGroup?: "A+" | "B+" | "AB+" | "A-" | "B-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  admissionSemester: Types.ObjectId;
  isDeleted: boolean;
  academicDepertment: Types.ObjectId;
}

// for creating static

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}




// for creating instance

// export type StudentMethod = {
//   isUserExist(id: string): Promise<TStudent | null>
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethod>

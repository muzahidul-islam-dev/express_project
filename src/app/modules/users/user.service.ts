import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import AcademicSemesterModel from "../academicSemester/academicSemester.model";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.mode";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {


  // create a user object

  const userData: Partial<TUser> = {};


  // if password is not give, use default password
  userData.password = password || config.default_password as string;

  // set student roll
  userData.role = 'student'

  // set Manually generated id

  

  // find academic semester info

  const admissionSemester = await AcademicSemesterModel.findById(payload.admissionSemester)

  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  userData.id = await generateStudentId(admissionSemester)




  const newUser = await User.create(userData);

  // create a student

  // console.log(studentData, 'student data');
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payload.id = newUser.id
    payload.user = newUser._id // reference_id


    const newStudent = await Student.create(payload);
    return newStudent;
  }


}

export const UserServices = {
  createStudentIntoDB
}
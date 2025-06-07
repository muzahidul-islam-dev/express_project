import config from "../../config";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.mode";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {


  // create a user object

  const userData: Partial<TUser> = {};


  // if password is not give, use default password
  userData.password = password || config.default_password as string;

  // set student roll
  userData.role = 'student'

  // set Manually generated id

  userData.id = '2030100001'

  const newUser = await User.create(userData);

  // create a student

  // console.log(studentData, 'student data');
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id
    studentData.user = newUser._id // reference_id


    const newStudent = await Student.create(studentData);
    return newStudent;
  }


}

export const UserServices = {
  createStudentIntoDB
}
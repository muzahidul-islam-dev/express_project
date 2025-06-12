import mongoose from "mongoose";
import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import AcademicSemesterModel from "../academicSemester/academicSemester.model";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.mode";
import { generateStudentId } from "./user.utils";
import AppError from "../../error/AppError";
import httpStatus from 'http-status'
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


  const session = await mongoose.startSession();

  try {

    session.startTransaction()

    if (!admissionSemester) {
      throw new Error('Admission semester not found');
    }

    userData.id = await generateStudentId(admissionSemester)

    const newUser = await User.create([userData], { session });

    // create a student

    // console.log(studentData, 'student data');
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }



    // set id, _id as user
    payload.id = newUser[0].id
    payload.user = newUser[0]._id // reference_id


    const newStudent = await Student.create([payload], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Student')
    }

    await session.commitTransaction()
    await session.endSession()
    return newStudent;

  } catch (error) {

    await session.abortTransaction();
    await session.endSession()

    throw new Error('Failed to create user')
  }




}

export const UserServices = {
  createStudentIntoDB
}
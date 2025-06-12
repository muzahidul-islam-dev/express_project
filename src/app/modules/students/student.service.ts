import mongoose from "mongoose";
import { TStudent } from "./student.interface";
import { Student } from "./student.model";
import AppError from "../../error/AppError";
import httpStatus from 'http-status'
import { User } from "../users/user.mode";



const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id: id }).populate('admissionSemester').populate({
    path: 'academicDepertment',
    populate: {
      path: 'academicFaculty'
    }
  });
  return result
}

const getAllStudentsFromDB = async () => {
  const result = await Student.find({ isDeleted: false }).populate('admissionSemester').populate({
    path: 'academicDepertment',
    populate: {
      path: 'academicFaculty'
    }
  });
  return result;
}

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction()
    const deletedStudent = await Student.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session })

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete Student')
    }

    const deletedUser = await User.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session });

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete User')
    }

    await session.commitTransaction()
    await session.endSession();
    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession()

    throw new Error('Failed to delete Student')
  }

}

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const result = await Student.findOneAndUpdate({ id }, payload)
  return result;
}

export const StudentServices = {
  getSingleStudentFromDB,
  getAllStudentsFromDB,
  deleteStudentFromDB,
  updateStudentIntoDB
}
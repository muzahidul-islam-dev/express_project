import mongoose from "mongoose";
import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import AcademicSemesterModel from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {


  // semester name --> semester code

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code')
  }

  const result = await AcademicSemesterModel.create(payload);
  return result;
}


const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemesterModel.find();

  return result;
}

const getSingleAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result
}

const updateAcademicSemesterFromDB = async (id: string, payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code!')
  }
  const result = await AcademicSemesterModel.findOneAndUpdate({ _id: id }, payload)
  return result;
}

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterIntoDB,
  updateAcademicSemesterFromDB
}
import { NextFunction, Request, RequestHandler, Response } from "express";
import { AcademicDepertment } from "./academicDepertment.model";
import { TAcademicDepertment } from "./academicDepertment.interface";




const createAcademicDepertmentIntoDB = async (payload: TAcademicDepertment) => {
  const result = AcademicDepertment.create(payload)
  return result;
}


const getAllAcademicFacultiesFromDB = async () => {
  const result = AcademicDepertment.find();
  return result;
}

const getSingleAcademicDepertmentFromDB = async (id: string) => {
  const result = AcademicDepertment.findById(id);
  return result;
}

const updateAcademicDepertmentIntoDB = async (id: string, payload: TAcademicDepertment) => {
  const result = AcademicDepertment.updateOne({
    _id: id
  },payload)
  return result;
}


export const AcademicDepertmentServices = {
  createAcademicDepertmentIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicDepertmentFromDB,
  updateAcademicDepertmentIntoDB
}
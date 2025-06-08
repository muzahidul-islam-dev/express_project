import { NextFunction, Request, RequestHandler, Response } from "express";
import { AcademicFacultyServices } from "./academicFaculty.service";
import httpStatus from "http-status";
import { TAcademicFaculty } from "./academicFaculty.interface";
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(error => next(error))
  }
}

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T
}

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data
  })
}

const createAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Academic Faculty create successfully',
    data: result
  })
})


const getSingleAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty found',
    data: result
  })
})

const getAllAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrive Successfully',
    data: result
  })
})

const updateAcademicFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Successfully',
    data: result
  })
})

export const AcademicFacultyController = {
  createAcademicFaculty,
  getSingleAcademicFaculty,
  getAllAcademicFaculty,
  updateAcademicFaculty
}
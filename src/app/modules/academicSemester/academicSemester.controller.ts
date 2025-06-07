import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { AcademicSemesterServices } from "./academicSemester.service";
import { RequestHandler } from "express-serve-static-core";

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

const createAcademicSemester = catchAsync(async (req: Request, res: Response) => {


  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Academic semester created successfully',
    data: result
  })
})


const getAllAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester data retrive successfully.',
    data: result
  })
})

const getSingleAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.getSingleAcademicSemesterIntoDB(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semister founded',
    data: result
  });
});

const updateAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterServices.updateAcademicSemesterFromDB(req.params.id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Successfully',
    data: result
  })
})


export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester
}
import { NextFunction, Request, RequestHandler, Response } from "express";
import { AcademicDepertmentServices } from "./academicDepertment.service";
import httpStatus from 'http-status'
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

const createAcademicDepertment = catchAsync(async (req: Request, res: Response) => {
  const result = AcademicDepertmentServices.createAcademicDepertmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Academic Depertment Created Successfully',
    data: result
  })
})

const getSingleAcademicDepertment = catchAsync(async (req: Request, res: Response) => {
  const result = AcademicDepertmentServices.getSingleAcademicDepertmentFromDB(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Depertment found successfully',
    data: result
  })
})

const getAllAcademicDepertment = catchAsync(async (req: Request, res: Response) => {
  const result = AcademicDepertmentServices.getAllAcademicFacultiesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Depertment retrive successfully',
    data: result
  })
})

const updateAcademicDepertment = catchAsync(async (req: Request, res: Response) => {
  const result = AcademicDepertmentServices.updateAcademicDepertmentIntoDB(req.params.id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Depertment updated successfully',
    data: result
  })
})



export const AcademicDepertmentController = {
  createAcademicDepertment,
  getSingleAcademicDepertment,
  getAllAcademicDepertment,
  updateAcademicDepertment
}
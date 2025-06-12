import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";



const editSingleStudent: RequestHandler = catchAsync(async (req, res) => {

  const studentId = req.params.id;

  const result = await StudentServices.getSingleStudentFromDB(studentId)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student retrieved successfully',
    data: result
  })

})

const getAllStudent = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Students retrieved successfully',
    data: result
  })
})

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.deleteStudentFromDB(req.params.studentId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student Delete successfully',
    data: result
  })
})

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const updateStudent = await StudentServices.updateStudentIntoDB(req.params.studentId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully',
    data: updateStudent
  })
})

export const StudentController = {
  editSingleStudent,
  getAllStudent,
  deleteStudent,
  updateStudent
}


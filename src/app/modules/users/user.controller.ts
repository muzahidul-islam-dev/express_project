import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createStudent = async (req: Request, res: Response, next: NextFunction) => {

  try {

    const studentData = req.body;
    const {password} = studentData;
    console.log(password, 'student data from controller');

    // creating a schema validation using zod

    // const zodParsedData = userValidation.UserSchemaValidation.parse(student)


    // const { error, value } = studentValidationSchema.parse(student)

    // Data validation using joi
    const result = await UserServices.createStudentIntoDB(password, studentData);



    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Student created successfully',
      data: result
    })

  } catch (error: any) {
    next(error)
  }
}

export const UserControllers = {
  createStudent
}
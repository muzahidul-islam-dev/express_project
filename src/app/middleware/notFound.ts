import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
const notFound = (req: Request, res: Response) => {

  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API Not found',
    error: '',
  });
  
}


export default notFound;
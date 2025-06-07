import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../students/student.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();




router.post('/create-student', validateRequest(studentValidations.studentValidationSchema), UserControllers.createStudent)

export const UserRoutes = router;
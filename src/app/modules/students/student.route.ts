import express, { NextFunction, Request, Response } from 'express'
import { StudentController } from './student.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from './student.validation';

const router = express.Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body
    })
    next()
  }
}


router.get('/edit/:id', StudentController.editSingleStudent)
router.patch('/:studentId', validateRequest(studentValidations.updateStudentValidationSchema),StudentController.updateStudent)
router.delete('/:studentId', StudentController.deleteStudent)

router.get('/', StudentController.getAllStudent);

export const StudentRoutes = router;
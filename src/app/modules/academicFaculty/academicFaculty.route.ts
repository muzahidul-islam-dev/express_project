import { NextFunction, Request, Response, Router } from "express";
import { AcademicFacultyController } from "./academicFaculty.controller";
import { AnyZodObject } from "zod";
import { AcademicFacultyValidations } from "./academicFaculty.validation";

const router = Router()

const requestValidate = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body
    })
    next();
  }
}

router.get('/', AcademicFacultyController.getAllAcademicFaculty);
router.post('/create-academic-faculty', requestValidate(AcademicFacultyValidations.createAcademicFacultyValidationSchema), AcademicFacultyController.createAcademicFaculty)
router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty)
router.patch('/:id', requestValidate(AcademicFacultyValidations.updateAcademicFacultyValidationSchema), AcademicFacultyController.updateAcademicFaculty)

export const AcademicFacultyRoutes = router;
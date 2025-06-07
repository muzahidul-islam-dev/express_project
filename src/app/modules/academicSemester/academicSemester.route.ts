import { NextFunction, Request, Response, Router } from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import { AcademicSemesterValidations } from "./academicSemester.validation";
import { AnyZodObject } from "zod";

const router = Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body
    })
    next();
  }
}

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidations.createAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester);
router.get('/', AcademicSemesterController.getAllAcademicSemester)
router.get('/:id', AcademicSemesterController.getSingleAcademicSemester)
router.patch('/:id', validateRequest(AcademicSemesterValidations.updateAcademicSemesterValidationSchema), AcademicSemesterController.updateAcademicSemester)


export const AcademicSemesterRoutes = router;
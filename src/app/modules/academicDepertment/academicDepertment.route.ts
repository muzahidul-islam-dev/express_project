import { NextFunction, Request, Response, Router } from "express";
import { AcademicDepertmentController } from "./academicDepertment.controller";
import { AnyZodObject } from "zod";
import { AcademicDepertmentValidations } from "./academicDepertment.validation";

const router = Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    schema.parseAsync({
      body: req.body
    })

    next();
  }
}


router.post('/create-academic-depertment',validateRequest(AcademicDepertmentValidations.createAcademicDepertmentValidationSchema),AcademicDepertmentController.createAcademicDepertment)
router.get('/',AcademicDepertmentController.getAllAcademicDepertment)
router.get('/:id',AcademicDepertmentController.getSingleAcademicDepertment)
router.patch('/:id',validateRequest(AcademicDepertmentValidations.updateAcademicDepertmentValidationSchema),AcademicDepertmentController.updateAcademicDepertment)


export const AcademicDepertmentRoutes = router;
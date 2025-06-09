import { z } from "zod";

const createAcademicDepertmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Depertment must be string',
      required_error: 'Name is required'
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'Faculty is required'
    })
  })
})

const updateAcademicDepertmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Depertment must be string',
      required_error: 'Name is required'
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'Faculty is required'
    })
  })
})

export const AcademicDepertmentValidations = {
  createAcademicDepertmentValidationSchema,
  updateAcademicDepertmentValidationSchema
}
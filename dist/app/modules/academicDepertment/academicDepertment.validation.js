"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepertmentValidations = void 0;
const zod_1 = require("zod");
const createAcademicDepertmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Academic Depertment must be string',
            required_error: 'Name is required'
        }),
        academicFaculty: zod_1.z.string({
            invalid_type_error: 'Academic faculty must be string',
            required_error: 'Faculty is required'
        })
    })
});
const updateAcademicDepertmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Academic Depertment must be string',
            required_error: 'Name is required'
        }),
        academicFaculty: zod_1.z.string({
            invalid_type_error: 'Academic faculty must be string',
            required_error: 'Faculty is required'
        })
    })
});
exports.AcademicDepertmentValidations = {
    createAcademicDepertmentValidationSchema,
    updateAcademicDepertmentValidationSchema
};

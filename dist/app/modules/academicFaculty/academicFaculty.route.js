"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = require("express");
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const router = (0, express_1.Router)();
const requestValidate = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield schema.parseAsync({
            body: req.body
        });
        next();
    });
};
router.get('/', academicFaculty_controller_1.AcademicFacultyController.getAllAcademicFaculty);
router.post('/create-academic-faculty', requestValidate(academicFaculty_validation_1.AcademicFacultyValidations.createAcademicFacultyValidationSchema), academicFaculty_controller_1.AcademicFacultyController.createAcademicFaculty);
router.get('/:id', academicFaculty_controller_1.AcademicFacultyController.getSingleAcademicFaculty);
router.patch('/:id', requestValidate(academicFaculty_validation_1.AcademicFacultyValidations.updateAcademicFacultyValidationSchema), academicFaculty_controller_1.AcademicFacultyController.updateAcademicFaculty);
exports.AcademicFacultyRoutes = router;

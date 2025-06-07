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
exports.AcademicSemesterRoutes = void 0;
const express_1 = require("express");
const academicSemester_controller_1 = require("./academicSemester.controller");
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = (0, express_1.Router)();
const validateRequest = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield schema.parseAsync({
            body: req.body
        });
        next();
    });
};
router.post('/create-academic-semester', validateRequest(academicSemester_validation_1.AcademicSemesterValidations.createAcademicSemesterValidationSchema), academicSemester_controller_1.AcademicSemesterController.createAcademicSemester);
router.get('/', academicSemester_controller_1.AcademicSemesterController.getAllAcademicSemester);
router.get('/:id', academicSemester_controller_1.AcademicSemesterController.getSingleAcademicSemester);
router.patch('/:id', validateRequest(academicSemester_validation_1.AcademicSemesterValidations.updateAcademicSemesterValidationSchema), academicSemester_controller_1.AcademicSemesterController.updateAcademicSemester);
exports.AcademicSemesterRoutes = router;

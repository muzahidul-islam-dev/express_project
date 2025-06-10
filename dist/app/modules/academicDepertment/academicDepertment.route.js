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
exports.AcademicDepertmentRoutes = void 0;
const express_1 = require("express");
const academicDepertment_controller_1 = require("./academicDepertment.controller");
const academicDepertment_validation_1 = require("./academicDepertment.validation");
const router = (0, express_1.Router)();
const validateRequest = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        schema.parseAsync({
            body: req.body
        });
        next();
    });
};
router.post('/create-academic-depertment', validateRequest(academicDepertment_validation_1.AcademicDepertmentValidations.createAcademicDepertmentValidationSchema), academicDepertment_controller_1.AcademicDepertmentController.createAcademicDepertment);
router.get('/', academicDepertment_controller_1.AcademicDepertmentController.getAllAcademicDepertment);
router.get('/:id', academicDepertment_controller_1.AcademicDepertmentController.getSingleAcademicDepertment);
router.patch('/:id', validateRequest(academicDepertment_validation_1.AcademicDepertmentValidations.updateAcademicDepertmentValidationSchema), academicDepertment_controller_1.AcademicDepertmentController.updateAcademicDepertment);
exports.AcademicDepertmentRoutes = router;

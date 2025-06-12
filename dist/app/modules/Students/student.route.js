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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const student_validation_1 = require("./student.validation");
const router = express_1.default.Router();
const validateRequest = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield schema.parseAsync({
            body: req.body
        });
        next();
    });
};
router.get('/edit/:id', student_controller_1.StudentController.editSingleStudent);
router.patch('/:studentId', validateRequest(student_validation_1.studentValidations.updateStudentValidationSchema), student_controller_1.StudentController.updateStudent);
router.delete('/:studentId', student_controller_1.StudentController.deleteStudent);
router.get('/', student_controller_1.StudentController.getAllStudent);
exports.StudentRoutes = router;

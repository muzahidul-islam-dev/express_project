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
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../config"));
const student_model_1 = require("../students/student.model");
const user_mode_1 = require("./user.mode");
const user_utils_1 = require("./user.utils");
const createStudentIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // create a user object
    const userData = {};
    // if password is not give, use default password
    userData.password = password || config_1.default.default_password;
    // set student roll
    userData.role = 'student';
    // set Manually generated id
    // find academic semester info
    const admissionSemester = yield AcademicSemester.findById(payload.admissionSemester);
    userData.id = (0, user_utils_1.generateStudentId)(admissionSemester);
    const newUser = yield user_mode_1.User.create(userData);
    // create a student
    // console.log(studentData, 'student data');
    if (Object.keys(newUser).length) {
        // set id, _id as user
        payload.id = newUser.id;
        payload.user = newUser._id; // reference_id
        const newStudent = yield student_model_1.Student.create(payload);
        return newStudent;
    }
});
exports.UserServices = {
    createStudentIntoDB
};

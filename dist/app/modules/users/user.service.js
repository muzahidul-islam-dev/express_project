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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
const academicSemester_model_1 = __importDefault(require("../academicSemester/academicSemester.model"));
const student_model_1 = require("../students/student.model");
const user_mode_1 = require("./user.mode");
const user_utils_1 = require("./user.utils");
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createStudentIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // create a user object
    const userData = {};
    // if password is not give, use default password
    userData.password = password || config_1.default.default_password;
    // set student roll
    userData.role = 'student';
    // set Manually generated id
    // find academic semester info
    const admissionSemester = yield academicSemester_model_1.default.findById(payload.admissionSemester);
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        if (!admissionSemester) {
            throw new Error('Admission semester not found');
        }
        userData.id = yield (0, user_utils_1.generateStudentId)(admissionSemester);
        const newUser = yield user_mode_1.User.create([userData], { session });
        // create a student
        // console.log(studentData, 'student data');
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create user');
        }
        // set id, _id as user
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id; // reference_id
        const newStudent = yield student_model_1.Student.create([payload], { session });
        if (!newUser.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Student');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
    }
});
exports.UserServices = {
    createStudentIntoDB
};

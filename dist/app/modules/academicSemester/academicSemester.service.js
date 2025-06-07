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
exports.AcademicSemesterServices = void 0;
const academicSemester_constant_1 = require("./academicSemester.constant");
const academicSemester_model_1 = __importDefault(require("./academicSemester.model"));
const createAcademicSemesterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // semester name --> semester code
    if (academicSemester_constant_1.academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid Semester Code');
    }
    const result = yield academicSemester_model_1.default.create(payload);
    return result;
});
const getAllAcademicSemesterFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_model_1.default.find();
    return result;
});
const getSingleAcademicSemesterIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_model_1.default.findById(id);
    return result;
});
const updateAcademicSemesterFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (academicSemester_constant_1.academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid Semester Code!');
    }
    const result = yield academicSemester_model_1.default.findOneAndUpdate({ _id: id }, payload);
    return result;
});
exports.AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterFromDB,
    getSingleAcademicSemesterIntoDB,
    updateAcademicSemesterFromDB
};

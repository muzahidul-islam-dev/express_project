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
exports.AcademicFacultyController = void 0;
const academicFaculty_service_1 = require("./academicFaculty.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(error => next(error));
    };
};
const sendResponse = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data
    });
};
const createAcademicFaculty = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.AcademicFacultyServices.createAcademicFacultyIntoDB(req.body);
    sendResponse(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Academic Faculty create successfully',
        data: result
    });
}));
const getSingleAcademicFaculty = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.AcademicFacultyServices.getSingleAcademicFacultyFromDB(req.params.id);
    sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Faculty found',
        data: result
    });
}));
const getAllAcademicFaculty = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.AcademicFacultyServices.getAllAcademicFacultyFromDB();
    sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrive Successfully',
        data: result
    });
}));
const updateAcademicFaculty = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.AcademicFacultyServices.updateAcademicFacultyIntoDB(req.params.id, req.body);
    sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Update Successfully',
        data: result
    });
}));
exports.AcademicFacultyController = {
    createAcademicFaculty,
    getSingleAcademicFaculty,
    getAllAcademicFaculty,
    updateAcademicFaculty
};

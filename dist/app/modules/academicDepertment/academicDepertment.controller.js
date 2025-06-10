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
exports.AcademicDepertmentController = void 0;
const academicDepertment_service_1 = require("./academicDepertment.service");
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
const createAcademicDepertment = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepertment_service_1.AcademicDepertmentServices.createAcademicDepertmentIntoDB(req.body);
    sendResponse(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Academic Depertment Created Successfully',
        data: result
    });
}));
const getSingleAcademicDepertment = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepertment_service_1.AcademicDepertmentServices.getSingleAcademicDepertmentFromDB(req.params.id);
    sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Depertment found successfully',
        data: result
    });
}));
const getAllAcademicDepertment = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepertment_service_1.AcademicDepertmentServices.getAllAcademicFacultiesFromDB();
    sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Depertment retrive successfully',
        data: result
    });
}));
const updateAcademicDepertment = catchAsync((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepertment_service_1.AcademicDepertmentServices.updateAcademicDepertmentIntoDB(req.params.id, req.body);
    sendResponse(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Depertment updated successfully',
        data: result
    });
}));
exports.AcademicDepertmentController = {
    createAcademicDepertment,
    getSingleAcademicDepertment,
    getAllAcademicDepertment,
    updateAcademicDepertment
};

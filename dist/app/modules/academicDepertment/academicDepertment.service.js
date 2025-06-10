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
exports.AcademicDepertmentServices = void 0;
const academicDepertment_model_1 = require("./academicDepertment.model");
const createAcademicDepertmentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = academicDepertment_model_1.AcademicDepertment.create(payload);
    return result;
});
const getAllAcademicFacultiesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = academicDepertment_model_1.AcademicDepertment.find().populate('academicFaculty');
    return result;
});
const getSingleAcademicDepertmentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = academicDepertment_model_1.AcademicDepertment.findById(id);
    return result;
});
const updateAcademicDepertmentIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = academicDepertment_model_1.AcademicDepertment.findOneAndUpdate({
        _id: id
    }, payload);
    return result;
});
exports.AcademicDepertmentServices = {
    createAcademicDepertmentIntoDB,
    getAllAcademicFacultiesFromDB,
    getSingleAcademicDepertmentFromDB,
    updateAcademicDepertmentIntoDB
};

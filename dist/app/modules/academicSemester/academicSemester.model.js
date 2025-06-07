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
const mongoose_1 = require("mongoose");
const academicSemester_constant_1 = require("./academicSemester.constant");
const AcademicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Academic semester name is required"],
        enum: academicSemester_constant_1.AcademicSemesterNames,
    },
    code: {
        type: String,
        required: [true, "Academic semester code is required"],
        enum: academicSemester_constant_1.AcademicSemesterCodes,
    },
    year: {
        type: String,
        required: [true, "Academic semester year is required"],
    },
    startMonth: {
        type: String,
        required: [true, "Academic semester start month is required"],
        enum: academicSemester_constant_1.Months,
    },
    endMonth: {
        type: String,
        required: [true, "Academic semester end month is required"],
        enum: academicSemester_constant_1.Months,
    }
}, {
    timestamps: true
});
AcademicSemesterSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isSemesterExists = yield AcademicSemesterModel.findOne({
            name: this.name,
            year: this.year
        });
        if (isSemesterExists) {
            throw new Error('Semester is allready exists !');
        }
        next();
    });
});
const AcademicSemesterModel = (0, mongoose_1.model)("AcademicSemester", AcademicSemesterSchema);
exports.default = AcademicSemesterModel;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepertment = void 0;
const mongoose_1 = require("mongoose");
const academicDepertmentSchema = new mongoose_1.Schema({
    name: {
        required: true,
        unique: true,
        type: String
    },
    academicFaculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AcademicFaculty'
    }
}, {
    timestamps: true
});
exports.AcademicDepertment = (0, mongoose_1.model)('AcademicDepertment', academicDepertmentSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStudentId = void 0;
const generateStudentId = (payload) => {
    // first time 0000
    const currentId = (0).toString().padStart(4, '0');
    let incrementId = (Number(currentId) + 1).toString();
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
};
exports.generateStudentId = generateStudentId;

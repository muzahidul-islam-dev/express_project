"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const UserSchemaValidation = zod_1.z.object({
    password: zod_1.z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string"
    }).max(20, {
        message: "Password must be less than or equal to 20 characters",
    }).optional()
});
exports.userValidation = { UserSchemaValidation };

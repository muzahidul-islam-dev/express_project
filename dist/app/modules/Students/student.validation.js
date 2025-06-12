"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidations = void 0;
const zod_1 = require("zod");
// Name schema
const createUserNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().max(20, { message: "First Name can not be more than 20 characters" })
        .nonempty({ message: "First name is required" }),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().nonempty({ message: "Last name is required" }),
});
// Guardian schema
const createGuardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string().nonempty({ message: "Father name is required" }),
    fatherOccupation: zod_1.z.string().nonempty({ message: "Father occupation is required" }),
    fatherContactNo: zod_1.z.string().nonempty({ message: "Father Contact Number is required" }),
    motherName: zod_1.z.string().nonempty({ message: "Mother name is required" }),
    motherOccupation: zod_1.z.string().nonempty({ message: "Mother occupation is required" }),
    motherContactNo: zod_1.z.string().nonempty({ message: "Mother Contact Number is required" }),
});
// Local Guardian schema
const createLocalGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: "Local guardian name is required" }),
    occupation: zod_1.z.string().nonempty({ message: "Local guardian occupation is required" }),
    contactNo: zod_1.z.string().nonempty({ message: "Local guardian contact number is required" }),
    address: zod_1.z.string().nonempty({ message: 'Local guardian address is required' })
});
// Student schema
const createStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: createUserNameValidationSchema,
        password: zod_1.z.string().nonempty({ message: 'Passwor is required' }),
        gender: zod_1.z.enum(["male", "female"], {
            errorMap: () => ({ message: "Gender must be 'male' or 'female'" }),
        }),
        avatar: zod_1.z.string().url().optional(),
        dateOfBirth: zod_1.z.string().optional(), // Use z.coerce.date() if using date inputs
        email: zod_1.z.string().email({ message: "Invalid email" }),
        contactNo: zod_1.z.string().nonempty({ message: "Contact number is required" }),
        emergencycontactNo: zod_1.z.string().nonempty({ message: "Emergency contact number is required" }),
        bloodGroup: zod_1.z.enum(["A+", "A-", "AB+", "B+", "B-"]).optional(),
        presentAddress: zod_1.z.string().nonempty({ message: "Present address is required" }),
        permanentAddress: zod_1.z.string().nonempty({ message: "Permanent address is required" }),
        guardian: createGuardianValidationSchema,
        localGuardian: createLocalGuardianValidationSchema,
        profileImage: zod_1.z.string().url().optional()
    })
});
// Name schema
const updateUserNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().max(20, { message: "First Name can not be more than 20 characters" })
        .nonempty({ message: "First name is required" }),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().nonempty({ message: "Last name is required" }),
}).partial();
// Guardian schema
const updateGuardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string().nonempty({ message: "Father name is required" }),
    fatherOccupation: zod_1.z.string().nonempty({ message: "Father occupation is required" }),
    fatherContactNo: zod_1.z.string().nonempty({ message: "Father Contact Number is required" }),
    motherName: zod_1.z.string().nonempty({ message: "Mother name is required" }),
    motherOccupation: zod_1.z.string().nonempty({ message: "Mother occupation is required" }),
    motherContactNo: zod_1.z.string().nonempty({ message: "Mother Contact Number is required" }),
}).partial();
// Local Guardian schema
const updateLocalGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: "Local guardian name is required" }),
    occupation: zod_1.z.string().nonempty({ message: "Local guardian occupation is required" }),
    contactNo: zod_1.z.string().nonempty({ message: "Local guardian contact number is required" }),
    address: zod_1.z.string().nonempty({ message: 'Local guardian address is required' }),
}).partial();
// Student schema
const updateStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: updateUserNameValidationSchema,
        password: zod_1.z.string().nonempty({ message: 'Password is required' }).optional(),
        gender: zod_1.z.enum(["male", "female"], {
            errorMap: () => ({ message: "Gender must be 'male' or 'female'" }),
        }).optional(),
        avatar: zod_1.z.string().url().optional(),
        dateOfBirth: zod_1.z.string().optional(), // Use z.coerce.date() if using date inputs
        email: zod_1.z.string().email({ message: "Invalid email" }).optional(),
        contactNo: zod_1.z.string().nonempty({ message: "Contact number is required" }).optional(),
        emergencycontactNo: zod_1.z.string().nonempty({ message: "Emergency contact number is required" }).optional(),
        bloodGroup: zod_1.z.enum(["A+", "A-", "AB+", "B+", "B-"]).optional(),
        presentAddress: zod_1.z.string().nonempty({ message: "Present address is required" }).optional(),
        permanentAddress: zod_1.z.string().nonempty({ message: "Permanent address is required" }).optional(),
        guardian: updateGuardianValidationSchema.optional(),
        localGuardian: updateLocalGuardianValidationSchema.optional(),
        profileImage: zod_1.z.string().url().optional()
    }).partial()
});
exports.studentValidations = { createValidationSchema: createStudentValidationSchema, updateStudentValidationSchema };

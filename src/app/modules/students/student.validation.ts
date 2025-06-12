import { z } from "zod";

// Name schema
const createUserNameValidationSchema = z.object({
  firstName: z.string().max(20, { message: "First Name can not be more than 20 characters" })
    .nonempty({ message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().nonempty({ message: "Last name is required" }),
});

// Guardian schema
const createGuardianValidationSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father name is required" }),
  fatherOccupation: z.string().nonempty({ message: "Father occupation is required" }),
  fatherContactNo: z.string().nonempty({ message: "Father Contact Number is required" }),
  motherName: z.string().nonempty({ message: "Mother name is required" }),
  motherOccupation: z.string().nonempty({ message: "Mother occupation is required" }),
  motherContactNo: z.string().nonempty({ message: "Mother Contact Number is required" }),
});

// Local Guardian schema
const createLocalGuardianValidationSchema = z.object({
  name: z.string().nonempty({ message: "Local guardian name is required" }),
  occupation: z.string().nonempty({ message: "Local guardian occupation is required" }),
  contactNo: z.string().nonempty({ message: "Local guardian contact number is required" }),
  address: z.string().nonempty({ message: 'Local guardian address is required' })
});

// Student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    name: createUserNameValidationSchema,
    password: z.string().nonempty({ message: 'Passwor is required' }),
    gender: z.enum(["male", "female"], {
      errorMap: () => ({ message: "Gender must be 'male' or 'female'" }),
    }),
    avatar: z.string().url().optional(),
    dateOfBirth: z.string().optional(), // Use z.coerce.date() if using date inputs
    email: z.string().email({ message: "Invalid email" }),
    contactNo: z.string().nonempty({ message: "Contact number is required" }),
    emergencycontactNo: z.string().nonempty({ message: "Emergency contact number is required" }),
    bloodGroup: z.enum(["A+", "A-", "AB+", "B+", "B-"]).optional(),
    presentAddress: z.string().nonempty({ message: "Present address is required" }),
    permanentAddress: z.string().nonempty({ message: "Permanent address is required" }),
    guardian: createGuardianValidationSchema,
    localGuardian: createLocalGuardianValidationSchema,
    profileImage: z.string().url().optional()
  })
});








// Name schema
const updateUserNameValidationSchema = z.object({
  firstName: z.string().max(20, { message: "First Name can not be more than 20 characters" })
    .nonempty({ message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().nonempty({ message: "Last name is required" }),
}).partial();

// Guardian schema
const updateGuardianValidationSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father name is required" }),
  fatherOccupation: z.string().nonempty({ message: "Father occupation is required" }),
  fatherContactNo: z.string().nonempty({ message: "Father Contact Number is required" }),
  motherName: z.string().nonempty({ message: "Mother name is required" }),
  motherOccupation: z.string().nonempty({ message: "Mother occupation is required" }),
  motherContactNo: z.string().nonempty({ message: "Mother Contact Number is required" }),
}).partial();

// Local Guardian schema
const updateLocalGuardianValidationSchema = z.object({
  name: z.string().nonempty({ message: "Local guardian name is required" }),
  occupation: z.string().nonempty({ message: "Local guardian occupation is required" }),
  contactNo: z.string().nonempty({ message: "Local guardian contact number is required" }),
  address: z.string().nonempty({ message: 'Local guardian address is required' }),
}).partial();

// Student schema
const updateStudentValidationSchema = z.object({
  body: z.object({
    name: updateUserNameValidationSchema,
    password: z.string().nonempty({ message: 'Password is required' }).optional(),
    gender: z.enum(["male", "female"], {
      errorMap: () => ({ message: "Gender must be 'male' or 'female'" }),
    }).optional(),
    avatar: z.string().url().optional(),
    dateOfBirth: z.string().optional(), // Use z.coerce.date() if using date inputs
    email: z.string().email({ message: "Invalid email" }).optional(),
    contactNo: z.string().nonempty({ message: "Contact number is required" }).optional(),
    emergencycontactNo: z.string().nonempty({ message: "Emergency contact number is required" }).optional(),
    bloodGroup: z.enum(["A+", "A-", "AB+", "B+", "B-"]).optional(),
    presentAddress: z.string().nonempty({ message: "Present address is required" }).optional(),
    permanentAddress: z.string().nonempty({ message: "Permanent address is required" }).optional(),
    guardian: updateGuardianValidationSchema.optional(),
    localGuardian: updateLocalGuardianValidationSchema.optional(),
    profileImage: z.string().url().optional()
  }).partial()
});

export const studentValidations = { createValidationSchema: createStudentValidationSchema, updateStudentValidationSchema };

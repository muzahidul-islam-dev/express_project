import { z } from "zod";

// Name schema
const userNameSchema = z.object({
  firstName: z.string().max(20, { message: "First Name can not be more than 20 characters" })
    .nonempty({ message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().nonempty({ message: "Last name is required" }),
});

// Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father name is required" }),
  fatherOccupation: z.string().nonempty({ message: "Father occupation is required" }),
  fatherContactNo: z.string().nonempty({ message: "Father Contact Number is required" }),
  motherName: z.string().nonempty({ message: "Mother name is required" }),
  motherOccupation: z.string().nonempty({ message: "Mother occupation is required" }),
  motherContactNo: z.string().nonempty({ message: "Mother Contact Number is required" }),
});

// Local Guardian schema
const localGuardianSchema = z.object({
  name: z.string().nonempty({ message: "Local guardian name is required" }),
  occupation: z.string().nonempty({ message: "Local guardian occupation is required" }),
  contactNo: z.string().nonempty({ message: "Local guardian contact number is required" }),
  address: z.string().nonempty({ message: 'Local guardian address is required' })
});

// Student schema
const studentValidationSchema = z.object({
  body: z.object({
    name: userNameSchema,
    password: z.string().nonempty({ message: 'Passwor is required' }),
    gender: z.enum(["male", "female"], {
      errorMap: () => ({ message: "Gender must be 'male' or 'female'" }),
    }),
    avatar: z.string().url().optional(),
    dateOfBirth: z.string(), // Use z.coerce.date() if using date inputs
    email: z.string().email({ message: "Invalid email" }),
    contactNo: z.string().nonempty({ message: "Contact number is required" }),
    emergencycontactNo: z.string().nonempty({ message: "Emergency contact number is required" }),
    bloodGroup: z.enum(["A+", "A-", "AB+", "B+", "B-"]).optional(),
    presentAddress: z.string().nonempty({ message: "Present address is required" }),
    permanentAddress: z.string().nonempty({ message: "Permanent address is required" }),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImage: z.string().url().optional()
  })
});

export const studentValidations = { studentValidationSchema };

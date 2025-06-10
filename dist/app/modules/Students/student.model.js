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
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        maxlength: [20, "First Name can not be more than 20 character"]
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last name is required"]
    }
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: [true, "Father name is required"]
    },
    fatherOccupation: {
        type: String,
        required: [true, "Father occupation is required"]
    },
    fatherContactNo: {
        type: String,
        required: [true, "Father Contact Number is required"]
    },
    motherName: {
        type: String,
        required: true
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    motherContactNo: {
        type: String,
        required: true,
    }
});
const localGuardianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    }
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, required: true },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'User is required'],
        unique: true,
        ref: 'User'
    },
    name: {
        type: userNameSchema,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female"],
            message: '{VALUE} is not valid'
        },
        required: true
    },
    avatar: {
        type: String
    },
    dateOfBirth: { type: String },
    email: { type: String, unique: true, required: true },
    contactNo: { type: String, unique: true, required: true },
    emergencycontactNo: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ["A+", "A-", "AB+", "B+", "B-"],
            message: 'the blood group field can only be one of the following: '
        }
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        type: guardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
    },
    profileImage: {
        type: String,
    },
    admissionSemester: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AcademicSemester'
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    academicDepertment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AcademicDepertment'
    }
});
// pre save middleware/hooks
// studentSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook: we will save the data')
//   const user = this;
//   // hasing password and save into DB
//   user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
//   next()
// })
// studentSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// })
// Query Middleware
// studentSchema.pre('find', function (next) {
//   console.log(this)
// })
// creating a custom static method
studentSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.Student.findOne({ id });
        return existingUser;
    });
};
// creating a custom instance method
// studentSchema.methods.isUserExist = async function (id: string) {
//   const existingUser = await Student.findOne({
//     id: id
//   });
//   return existingUser;
// }
exports.Student = (0, mongoose_1.model)('Student', studentSchema);

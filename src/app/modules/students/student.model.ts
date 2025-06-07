import { model, Schema } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, StudentModel, TUserName } from "./student.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

const userNameSchema = new Schema<TUserName>({
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
})

const guardianSchema = new Schema<TGuardian>({
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


const localGuardianSchema = new Schema<TLocalGuardian>({
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
})



const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, unique: true, required: true },
  user: {
    type: Schema.Types.ObjectId,
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
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester'
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
})


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

studentSchema.pre('find', function (next) {
  console.log(this)
})

// creating a custom static method

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id })
  return existingUser;
}


// creating a custom instance method
// studentSchema.methods.isUserExist = async function (id: string) {
//   const existingUser = await Student.findOne({
//     id: id
//   });
//   return existingUser;
// }


export const Student = model<TStudent, StudentModel>('Student', studentSchema)
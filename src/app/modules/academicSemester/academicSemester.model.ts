import { model, Schema } from "mongoose";
import { TAcademicSemester, TMonths } from "./academicSemester.interface";
import { required } from "joi";
import { AcademicSemesterCodes, AcademicSemesterNames, Months } from "./academicSemester.constant";


const AcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: [true, "Academic semester name is required"],
    enum: AcademicSemesterNames,
  },
  code: {
    type: String,
    required: [true, "Academic semester code is required"],
    enum: AcademicSemesterCodes,
  },
  year: {
    type: String,
    required: [true, "Academic semester year is required"],
  },
  startMonth: {
    type: String,
    required: [true, "Academic semester start month is required"],
    enum: Months,
  },
  endMonth: {
    type: String,
    required: [true, "Academic semester end month is required"],
    enum: Months,
  }
},{
  timestamps: true
})

AcademicSemesterSchema.pre('save',async function(next) {
  const isSemesterExists = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year
  })
  if(isSemesterExists){
    throw new Error('Semester is allready exists !')
  }
  next();
})


const AcademicSemesterModel = model<TAcademicSemester>("AcademicSemester", AcademicSemesterSchema)

export default AcademicSemesterModel;
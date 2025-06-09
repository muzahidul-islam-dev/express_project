import { model, Schema } from "mongoose";
import { TAcademicDepertment } from "./academicDepertment.interface";

const academicDepertmentSchema = new Schema<TAcademicDepertment>({
  name: {
    required: true,
    unique: true,
    type: String
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty'
  }
},{
  timestamps: true
})



export const AcademicDepertment = model<TAcademicDepertment>('AcademicDepertment', academicDepertmentSchema)

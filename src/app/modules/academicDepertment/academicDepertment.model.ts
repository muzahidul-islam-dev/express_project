import { model, Schema } from "mongoose";
import { TAcademicDepertment } from "./academicDepertment.interface";
import AppError from "../../error/AppError";

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




academicDepertmentSchema.pre('findOneAndUpdate', async function(next){
  const query = this.getQuery();

  const isDepertmentExist = await AcademicDepertment.findOne(query)

  if(!isDepertmentExist){
    throw new AppError(404,'This depertment does not exist!');
  }

  next();
})



export const AcademicDepertment = model<TAcademicDepertment>('AcademicDepertment', academicDepertmentSchema)

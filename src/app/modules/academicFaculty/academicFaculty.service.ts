import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";



const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
}


const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id)
  return result;
}

const getAllAcademicFacultyFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
}

const updateAcademicFacultyIntoDB = async (id:string,payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.updateOne({_id: id},payload)
  return result;
}


export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getSingleAcademicFacultyFromDB,
  getAllAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB
}
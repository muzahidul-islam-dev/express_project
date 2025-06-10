import { TStudent } from "./student.interface";
import { Student } from "./student.model";




const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id: id }).populate('admissionSemester').populate({
    path: 'academicDepertment',
    populate: {
      path: 'academicFaculty'
    }
  });
  return result
}

const getAllStudentsFromDB = async () => {
  const result = await Student.find().populate('admissionSemester').populate({
    path: 'academicDepertment',
    populate: {
      path: 'academicFaculty'
    }
  });
  return result;
}

export const StudentServices = {
  getSingleStudentFromDB,
  getAllStudentsFromDB
}
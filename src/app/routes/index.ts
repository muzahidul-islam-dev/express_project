import { Router } from "express";
import { StudentRoutes } from "../modules/students/student.route";
import { UserRoutes } from "../modules/users/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepertmentRoutes } from "../modules/academicDepertment/academicDepertment.route";


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes
  },
  {
    path: '/academic-depertment',
    route: AcademicDepertmentRoutes
  }
];


moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;
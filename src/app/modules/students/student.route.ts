import express from 'express'
import { StudentController } from './student.controller';

const router = express.Router();




router.get('/edit/:id', StudentController.editSingleStudent)


router.get('/', StudentController.getAllStudent);

export const StudentRoutes = router;
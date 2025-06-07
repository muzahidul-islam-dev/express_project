import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './modules/students/student.route';
import { UserRoutes } from './modules/users/user.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import router from './routes';
const app: Application = express();


const port = 5001;

app.use(express.json())
app.use(cors())


// Application Routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})


app.use(globalErrorHandler)



// Not Found

app.use(notFound)

export default app;
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { projectRouter } from '@/main/routes/project';
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/project', projectRouter);
export { app };

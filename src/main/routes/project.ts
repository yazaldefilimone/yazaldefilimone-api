import { Router } from 'express';
import { expressAdapter } from '../adapters';
import { makeCreateProjectFactory } from '../factories';

const projectRouter = Router();

projectRouter.post('/create', expressAdapter(makeCreateProjectFactory()));

export { projectRouter };

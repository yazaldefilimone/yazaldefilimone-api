import { Router } from 'express';
import { expressAdapter } from '@/main/adapters';
import {
  makeCreateProjectFactory,
  makeFindProjectFactory,
  makeFindTechProjectFactory,
  makeFindTitleProjectFactory,
} from '@/main/factories';

const projectRouter = Router();

projectRouter.post('/create', expressAdapter(makeCreateProjectFactory()));
projectRouter.get('/all', expressAdapter(makeFindProjectFactory()));

export { projectRouter };

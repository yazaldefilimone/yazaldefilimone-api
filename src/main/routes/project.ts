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
projectRouter.get('/find-title/:title', expressAdapter(makeFindTitleProjectFactory()));
projectRouter.get('/find-tech/:tech', expressAdapter(makeFindTechProjectFactory()));

export { projectRouter };

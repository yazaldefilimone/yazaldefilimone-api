import {
  CreateProjectUseCase,
  FindProjectUsecase,
  FindTitleProjectUseCase,
  FindTechProjectUseCase,
} from '@/data/use-cases';
import { ProjectRepository } from '@/infra/prisma/repositories';
import {
  CreateProjectController,
  FindProjectController,
  FindTitleProjectController,
  FindTechProjectController,
} from '@/presentation/controllers';

const projectRepository = new ProjectRepository();

export const makeCreateProjectFactory = function (): CreateProjectController {
  const createProjectUsecase = new CreateProjectUseCase(projectRepository);
  const createProjectController = new CreateProjectController(createProjectUsecase);
  return createProjectController;
};

export const makeFindProjectFactory = function (): FindProjectController {
  const findProjectUsecase = new FindProjectUsecase(projectRepository);
  const findProjectController = new FindProjectController(findProjectUsecase);
  return findProjectController;
};
export const makeFindTitleProjectFactory = function (): FindTitleProjectController {
  const findProjectUsecase = new FindTitleProjectUseCase(projectRepository);
  const findProjectController = new FindTitleProjectController(findProjectUsecase);
  return findProjectController;
};

export const makeFindTechProjectFactory = function (): FindTechProjectController {
  const findTechProjectUsecase = new FindTechProjectUseCase(projectRepository);
  const findTechProjectController = new FindTechProjectController(findTechProjectUsecase);
  return findTechProjectController;
};

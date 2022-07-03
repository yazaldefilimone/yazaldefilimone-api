import { CreateProjectUseCase, FindProjectUsecase } from '@/data/use-cases';
import { ProjectRepository } from '@/infra/prisma/repositories';
import { CreateProjectController, FindProjectController } from '@/presentation/controllers';

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

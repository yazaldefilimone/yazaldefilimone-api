import { CreateProjectUseCase } from '@/data/use-cases';
import { ICreateProjectUseCase } from '@/domain/use-cases';
import { ProjectRepository } from '@/infra/prisma/repositories';
import { CreateProjectController } from '@/presentation/controllers';

export const makeCreateProjectFactory = function (): CreateProjectController {
  const projectRepository = new ProjectRepository();
  const createProjectUsecase = new CreateProjectUseCase(projectRepository);
  const createProjectController = new CreateProjectController(createProjectUsecase);
  return createProjectController;
};

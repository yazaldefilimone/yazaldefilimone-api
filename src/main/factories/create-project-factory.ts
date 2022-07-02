import { CreateProjectUseCase } from '@/data/use-cases';
import { ICreateProjectUseCase } from '@/domain/use-cases';
import { ProjectRepository } from '@/infra/prisma/repositories';

export const makeCreateProjectFactory = function (): ICreateProjectUseCase {
  const projectRepository = new ProjectRepository();
  const createProjectUsecase = new CreateProjectUseCase(projectRepository);
  return createProjectUsecase;
};

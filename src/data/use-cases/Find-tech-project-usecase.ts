import { IFindTechProjectUseCase } from '@/domain/use-cases';
import { IProjectRepository } from '../protocols/repositories';
import { left, right } from '@/shared/error-handler/either';
import { InvalidParamError } from '@/domain/errors';

export class FindTechProjectUseCase implements IFindTechProjectUseCase {
  private readonly projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async perform({ tech }: IFindTechProjectUseCase.Input): IFindTechProjectUseCase.Output {
    if (!tech) return left(new InvalidParamError('tech'));

    const projects = await this.projectRepository.findByTech({ tech });

    return right(projects);
  }
}

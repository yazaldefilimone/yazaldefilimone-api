import { IFindTitleProjectUseCase } from '@/domain/use-cases';
import { IProjectRepository } from '../protocols/repositories';
import { left, right } from '@/shared/error-handler/either';
import { InvalidParamError } from '@/domain/errors';

export class FindTitleProjectUseCase implements IFindTitleProjectUseCase {
  private readonly projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async perform({ title }: IFindTitleProjectUseCase.Input): IFindTitleProjectUseCase.Output {
    if (!title) return left(new InvalidParamError('title'));

    const projects = await this.projectRepository.findByTitle({ title });

    return right(projects);
  }
}

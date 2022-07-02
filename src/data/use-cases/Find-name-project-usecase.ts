import { IFindNameProjectUseCase } from '@/domain/use-cases';
import { IProjectRepository } from '../protocols/repositories';
import { left, right } from '@/shared/error-handler/either';
import { InvalidParamError } from '@/domain/errors';

export class FindNameProjectUseCase implements IFindNameProjectUseCase {
  private readonly projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async perform({ title }: IFindNameProjectUseCase.Input): IFindNameProjectUseCase.Output {
    if (!title) return left(new InvalidParamError('title'));

    const projects = await this.projectRepository.findByTitle({ title });

    return right(projects);
  }
}

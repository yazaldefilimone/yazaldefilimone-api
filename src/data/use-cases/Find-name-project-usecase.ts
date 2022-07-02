import { IFindNameProjectUseCase } from '@/domain/use-cases';
import { IProjectRepository } from '../protocols/repositories';
import { left, right } from '@/shared/error-handler/either';
import { InvalidParamError } from '@/domain/errors';

export class FindNameProjectUseCase implements IFindNameProjectUseCase {
  private readonly projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async perform({ name }: IFindNameProjectUseCase.Input): IFindNameProjectUseCase.Output {
    if (!name) return left(new InvalidParamError('name'));

    const projects = await this.projectRepository.findByName({ name });

    return right(projects);
  }
}

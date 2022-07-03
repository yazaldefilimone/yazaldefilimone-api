import { AlreadyExistsError, InvalidParamError } from '@/domain/errors';
import { ICreateProjectUseCase } from '@/domain/use-cases';
import { IProjectRepository } from '@/data/protocols/repositories';

import { left, right } from '@/shared/error-handler/either';

export class CreateProjectUseCase implements ICreateProjectUseCase {
  private readonly projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async perform(data: ICreateProjectUseCase.Input): ICreateProjectUseCase.Output {
    if (!data.repo) return left(new InvalidParamError('repo'));

    if (!data.title) return left(new InvalidParamError('title'));

    if (!data.url) return left(new InvalidParamError('url'));

    if (!data.description) return left(new InvalidParamError('description'));

    if (!data.banner) return left(new InvalidParamError('banner'));

    const isExistsRepo = await this.projectRepository.findByRepo({ repo: data.repo });

    if (isExistsRepo) {
      return left(new AlreadyExistsError('url repository'));
    }

    const isExistsTitle = await this.projectRepository.findByTitle({ title: data.title });

    if (isExistsTitle.length > 0) {
      return left(new AlreadyExistsError('title'));
    }

    const project = await this.projectRepository.add(data);

    return right(project);
  }
}

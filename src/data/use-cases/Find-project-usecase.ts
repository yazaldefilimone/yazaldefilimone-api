import { IFindProjectUseCase } from '@/domain/use-cases';
import { IProjectRepository } from '../protocols/repositories';

export class FindProjectUsecase implements IFindProjectUseCase {
  private readonly projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }
  async perform(data: IFindProjectUseCase.Input): IFindProjectUseCase.Output {
    const results = await this.projectRepository.findAll(data);

    return results;
  }
}

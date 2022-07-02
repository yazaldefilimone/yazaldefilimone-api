import { Either } from '@/shared/error-handler/either';
import { InvalidParamError } from '@/domain/errors';
import { ProjectStore } from '@/domain/entities';

export interface IFindTechProjectUseCase {
  perform: (data: IFindTechProjectUseCase.Input) => IFindTechProjectUseCase.Output;
}
export namespace IFindTechProjectUseCase {
  export type Input = { tech: string };
  export type Output = Promise<Either<InvalidParamError, ProjectStore[]>>;
}

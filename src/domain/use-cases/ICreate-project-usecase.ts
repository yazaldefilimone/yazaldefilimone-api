import { Either } from '@/shared/error-handler/either';
import { AlreadyExistsError, InvalidParamError } from '@/domain/errors';
import { Project } from '@/domain/entities';

export interface ICreateProjectUseCase {
  perform: (data: ICreateProjectUseCase.Input) => ICreateProjectUseCase.Output;
}
export namespace ICreateProjectUseCase {
  export type Input = Project;
  export type Output = Promise<Either<InvalidParamError | AlreadyExistsError, { id: string }>>;
}

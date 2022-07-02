import { Either } from '@/shared/error-handler/either';
import { AlreadyExistsError, InvalidParamError } from '@/domain/errors';

export interface ICreateProjectUseCase {
  perform: (data: ICreateProjectUseCase.Input) => ICreateProjectUseCase.Output;
}
export namespace ICreateProjectUseCase {
  export type Input = {
    techs: string[];
    title: string;
    description: string;
    banner: string;
    url: string;
    repo: string;
  };

  export type Output = Promise<Either<InvalidParamError | AlreadyExistsError, { id: string }>>;
}

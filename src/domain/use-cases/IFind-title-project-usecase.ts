import { Either } from '@/shared/error-handler/either';
import { InvalidParamError } from '@/domain/errors';
import { ProjectStore } from '@/domain/entities';

export interface IFindTitleProjectUseCase {
  perform: (data: IFindTitleProjectUseCase.Input) => IFindTitleProjectUseCase.Output;
}
export namespace IFindTitleProjectUseCase {
  export type Input = { title: string };
  export type Output = Promise<Either<InvalidParamError, ProjectStore[]>>;
}

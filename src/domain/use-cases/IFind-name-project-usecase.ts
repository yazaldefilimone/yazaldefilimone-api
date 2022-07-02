import { Either } from '@/shared/error-handler/either';
import { InvalidParamError } from '@/domain/errors';
import { ProjectStore } from '@/domain/entities';

export interface IFindNameProjectUseCase {
  perform: (data: IFindNameProjectUseCase.Input) => IFindNameProjectUseCase.Output;
}
export namespace IFindNameProjectUseCase {
  export type Input = { name: string };
  export type Output = Promise<Either<InvalidParamError, ProjectStore[]>>;
}

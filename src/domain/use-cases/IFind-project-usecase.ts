import { ProjectStore } from '@/domain/entities';

export interface IFindProjectUseCase {
  perform: (data: IFindProjectUseCase.Input) => IFindProjectUseCase.Output;
}
export namespace IFindProjectUseCase {
  export type Input = { page: number; limit: number };
  export type Output = Promise<ProjectStore[]>;
}

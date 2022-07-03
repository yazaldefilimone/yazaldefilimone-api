import { Project, ProjectStore } from '@/domain/entities';

export interface IProjectRepository {
  add: (data: IProjectRepository.Input) => Promise<{ id: string }>;
  findByTitle: (data: { title: string }) => IProjectRepository.OutputAll;
  findByTech: (data: { tech: string }) => IProjectRepository.OutputAll;
  findAll: (data?: { page: number; limit: number }) => Promise<ProjectStore[]>;
  findByRepo: (data: { repo: string }) => IProjectRepository.Output;
  delete: (data: { id: string }) => Promise<void>;
}

export namespace IProjectRepository {
  export type Input = Project;
  export type Output = Promise<ProjectStore | null>;
  export type OutputAll = Promise<ProjectStore[] | null>;
}

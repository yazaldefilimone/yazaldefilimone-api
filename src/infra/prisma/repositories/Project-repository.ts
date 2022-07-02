import { IProjectRepository } from '@/data/protocols/repositories';
import { ProjectStore } from '@/domain/entities';
import { prismaClient } from '@/infra/prisma/client';

export class ProjectRepository implements IProjectRepository {
  private readonly projectSchema: typeof prismaClient.project;
  constructor() {
    this.projectSchema = prismaClient.project;
  }
  async add(data: IProjectRepository.Input): Promise<{ id: string }> {
    const project = await this.projectSchema.create({
      data,
      select: {
        id: true,
      },
    });

    return project;
  }

  async findByTitle(data: { title: string }): IProjectRepository.OutputAll {
    const projects = (await this.projectSchema.findMany({
      where: {
        title: {
          contains: data.title,
          mode: 'insensitive',
        },
      },
      orderBy: {
        title: 'asc',
      },
      skip: 0,
      take: 4,
    })) as any;

    return projects;
  }

  async findByTech({ tech }: { tech: string }): IProjectRepository.OutputAll {
    const projects = await this.projectSchema.findMany({
      include: {
        stack: true,
      },
    });

    const filterProjects: any = projects.filter((project) => project.techs.includes(tech));

    return filterProjects;
  }

  async findAll(): Promise<ProjectStore[]> {
    const projects: any = await this.projectSchema.findMany();
    return projects;
  }

  async findByRepo(data: { repo: string }): IProjectRepository.Output {
    const project = (await this.projectSchema.findUnique({
      where: {
        repo: data.repo,
      },
    })) as any;

    return project;
  }

  async delete(data: { id: string }): Promise<void> {
    await this.projectSchema.delete({
      where: {
        id: data.id,
      },
    });
  }
}

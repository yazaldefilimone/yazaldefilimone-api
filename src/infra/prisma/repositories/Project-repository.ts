import { IProjectRepository } from '@/data/protocols/repositories';
import { ProjectStore } from '@/domain/entities';
import { prismaClient } from '@/infra/prisma/client';

export class ProjectRepository implements IProjectRepository {
  async add(data: IProjectRepository.Input): Promise<{ id: string }> {
    const project = await prismaClient.project.create({
      data,
      select: {
        id: true,
      },
    });

    return project;
  }

  async findByTitle(data: { title: string }): IProjectRepository.OutputAll {
    const projects = (await prismaClient.project.findMany({
      where: {
        title: {
          contains: data.title,
          mode: 'insensitive',
        },
      },
      orderBy: {
        title: 'asc',
      },
    })) as any;

    return projects;
  }

  async findByTech({ tech }: { tech: string }): IProjectRepository.OutputAll {
    const projects = await prismaClient.project.findMany({
      include: {
        stack: true,
      },
    });

    const filterProjects: any = projects.filter((project) => project.techs.includes(tech));

    return filterProjects;
  }

  async findAll(data: { page: number; limit: number }): Promise<ProjectStore[]> {
    const projects: any = await prismaClient.project.findMany({
      orderBy: {
        title: 'asc',
      },
      skip: (data.page - 1) * data.limit,
      take: data.limit,
    });
    return projects;
  }

  async findByRepo(data: { repo: string }): IProjectRepository.Output {
    const project = (await prismaClient.project.findUnique({
      where: {
        repo: data.repo,
      },
    })) as any;

    return project;
  }

  async delete(data: { id: string }): Promise<void> {
    await prismaClient.project.delete({
      where: {
        id: data.id,
      },
    });
  }
}

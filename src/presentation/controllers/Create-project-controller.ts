import { ICreateProjectUseCase } from '@/domain/use-cases';
import { IController, HttpResponse, ok, serverError, badRequest } from '@/presentation/protocols';

export class CreateProjectController implements IController {
  private readonly createProjectUseCase: ICreateProjectUseCase;
  constructor(createProjectUseCase: ICreateProjectUseCase) {
    this.createProjectUseCase = createProjectUseCase;
  }

  async handle(request: { body: any; params: any; query: any }): Promise<HttpResponse> {
    try {
      const result = await this.createProjectUseCase.perform(request.body);
      if (result.isLeft()) {
        return badRequest(result.value);
      }

      return ok(result.value);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

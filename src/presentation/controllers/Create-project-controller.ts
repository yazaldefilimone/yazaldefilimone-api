import { ICreateProjectUseCase } from '@/domain/use-cases';
import { IController, HttpResponse, ok, serverError, badRequest } from '@/presentation/protocols';

export class CreateProjectController implements IController {
  constructor(private readonly ICreateProjectUseCase: ICreateProjectUseCase) {}
  async handle(request: any): Promise<HttpResponse> {
    try {
      const result = await this.ICreateProjectUseCase.perform(request.body);
      if (result.isLeft()) {
        return badRequest(result.value);
      }

      return ok(result.value);
    } catch (error) {
      return serverError(error);
    }
  }
}

import { IFindTechProjectUseCase } from '@/domain/use-cases';
import { IController, HttpResponse, ok, serverError, badRequest } from '@/presentation/protocols';

export class FindTechProjectController implements IController {
  private readonly findTechProjectUseCase: IFindTechProjectUseCase;

  constructor(findTechProjectUseCase: IFindTechProjectUseCase) {
    this.findTechProjectUseCase = findTechProjectUseCase;
  }

  async handle(request: { body: any; params: any; query: any }): Promise<HttpResponse> {
    try {
      const result = await this.findTechProjectUseCase.perform(request.params);
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

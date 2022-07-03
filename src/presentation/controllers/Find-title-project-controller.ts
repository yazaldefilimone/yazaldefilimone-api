import { IFindTitleProjectUseCase } from '@/domain/use-cases';
import { IController, HttpResponse, ok, serverError, badRequest } from '@/presentation/protocols';

export class FindTitleProjectController implements IController {
  private readonly findTitleProjectUseCase: IFindTitleProjectUseCase;

  constructor(findTitleProjectUseCase: IFindTitleProjectUseCase) {
    this.findTitleProjectUseCase = findTitleProjectUseCase;
  }

  async handle(request: { body: any; params: any; query: any }): Promise<HttpResponse> {
    try {
      const result = await this.findTitleProjectUseCase.perform(request.params);
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

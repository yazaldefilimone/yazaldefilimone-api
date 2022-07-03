import { IFindProjectUseCase } from '@/domain/use-cases';
import { IController, HttpResponse, ok, serverError } from '@/presentation/protocols';
import { serializePagination } from '@/shared/utils';

export class FindProjectController implements IController {
  private readonly findProjectUseCase: IFindProjectUseCase;
  constructor(findProjectUseCase: IFindProjectUseCase) {
    this.findProjectUseCase = findProjectUseCase;
  }

  async handle(request: { body: any; params: any; query: any }): Promise<HttpResponse> {
    try {
      const { page, limit } = request.query;
      const paginationProps = serializePagination({
        page: Number(page) || 1,
        limit: Number(limit) || 4,
      });

      const result = await this.findProjectUseCase.perform(paginationProps);

      return ok(result);
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }
}

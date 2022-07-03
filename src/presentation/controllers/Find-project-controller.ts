import { IFindProjectUseCase } from '@/domain/use-cases';
import { IController, HttpResponse, ok, serverError } from '@/presentation/protocols';
import { serializePagination } from '@/shared/utils';

export class FindProjectController implements IController {
  constructor(private readonly IFindProjectUseCase: IFindProjectUseCase) {}
  async handle(request: any): Promise<HttpResponse> {
    try {
      const { page, limit } = request.query;
      const paginationProps = serializePagination({
        page: Number(page) || 1,
        limit: Number(limit) || 10,
      });

      const result = await this.IFindProjectUseCase.perform(paginationProps);

      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }
}

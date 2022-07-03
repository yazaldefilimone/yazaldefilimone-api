import { IController } from '@/presentation/protocols';
import { Request, Response } from 'express';

export const expressAdapter = (controller: IController) => {
  return async (request: Request, response: Response) => {
    const data = {
      body: request.body,
      params: request.params,
      query: request.query,
    };
    const httpResponse = await controller.handle(data);

    response.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

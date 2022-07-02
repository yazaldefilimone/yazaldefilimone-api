import { IController } from '@/presentation/protocols';
import { Request, Response } from 'express';

export const expressAdapter = (controller: IController) => {
  return async (request: Request, response: Response) => {
    const httpResponse = await controller.handle();

    response.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

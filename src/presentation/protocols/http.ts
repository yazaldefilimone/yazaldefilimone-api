export type HttpResponse<T = any> = {
  statusCode: number;
  body: T;
};

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

// export const unauthorized = (): HttpResponse => ({
//   statusCode: 401,
//   body: new UnauthorizedError(),
// });

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.message,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});

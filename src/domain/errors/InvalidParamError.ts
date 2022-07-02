export class InvalidParamError extends Error {
  constructor(param: string) {
    super(`The [${param}] field is invalid`);
  }
}

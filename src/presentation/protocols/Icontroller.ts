import { HttpResponse } from '@/presentation/protocols';

export interface IController {
  handle: (data?: any) => Promise<HttpResponse>;
}

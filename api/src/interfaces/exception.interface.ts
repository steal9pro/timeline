export interface ExceptionInterface {
  status: number;
  action?: number;
  type?: number;
  message: string;
  response?: string;
}

export type ExceptionType = ExceptionInterface;

import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express";
import { GeneralError } from "./errors/general-error";
import { ExceptionInterface } from "./interfaces/exception.interface";

@Catch(GeneralError)
export class GeneralExceptionFilter implements ExceptionFilter {
  catch(e: GeneralError<ExceptionInterface>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (e.data.status) {
      response.status(e.data.status);
    }

    response.json({ success: false, data: e.data.message });
  }
}

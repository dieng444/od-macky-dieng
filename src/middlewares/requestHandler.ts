import { RequestHandler, Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

interface Options {
  schema?: ObjectSchema;
  property?: 'body' | 'params' | 'query';
  status?: number;
}

export class NotFoundError extends Error {
  public constructor(message = 'Not found.') {
    super(message);
  }
}

/**
 * This router wrapper catches any error from async await
 * and throws it to the default express error handler,
 * instead of crashing the app
 * @param handler Request handler to check for error
 */
export default (handler: RequestHandler, options: Options = {}): RequestHandler => {
  const { schema, property, status } = options;

  return async function handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    const executeHandler = async (): Promise<void> => {
      try {
        const data = await handler(req, res, next);
        res.status(status ?? 200).send(data);
      } catch (err) {
        if (err instanceof NotFoundError) {
          res.status(404).send(err.message);

          return;
        }
        next(err);
      }
    };
    if (schema && property) {
      const { error } = schema.validate(req[property]);
      const valid = error == null;
      if (valid) {
        await executeHandler();
      } else {
        const { details } = error;
        const message = details.map((i) => i.message).join(',');
        console.log('error', message);
        res.status(422).send({ error: message });
      }
    } else {
      await executeHandler();
    }
  };
};

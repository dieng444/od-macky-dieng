import { NextFunction, Request, Response } from 'express';

const schemaValidator = (schema, property) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req[property]);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      console.log('error', message);
      res.status(422).json({ error: message });
    }
  };
};

export default schemaValidator;

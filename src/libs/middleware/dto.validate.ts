import { RequestHandler } from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";

function dtoValidationMiddleware(
  type: any,
  skipMissingProperties = false
): RequestHandler {
  return (req, res, next) => {
    const bodyDto = plainToInstance(type, req.body);
    validate(bodyDto, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const dtoErrors = errors.map(
            (error: ValidationError) => error.constraints
          );

          return res.status(400).json({
            error: dtoErrors
          });
        } else {
          for (const [key, value] of Object.entries(req.body)) {
            if (typeof value === "string") req.body[key] = value.trim();
          }
          next();
        }
      }
    );
  };
}

export default dtoValidationMiddleware;
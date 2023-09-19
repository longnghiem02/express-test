import { RequestHandler } from "express";
import { jwtDecode } from "../jwt";
import {
  message,
  jwtKey,
  needLoginPaths,
  needRolePaths,
  nonSecurePaths,
  role
} from "../../configs/constant";

export function checkRoute(): RequestHandler {
  return (req, res, next) => {
    if (nonSecurePaths.includes(req.path)) {
      return next();
    }
    
    const token = req.body.jwt;
    const result = jwtDecode(token, jwtKey);

    if (needLoginPaths.includes(req.path)) {
      if (token) {
        next();
      } else {
        return res.status(400).json({
          errMessage: message.errLogin
        });
      }
    } else if (needRolePaths.includes(req.path)) {
      if (token) {
        if (result.role === role.admin) {
          next();
        } else {
          return res.status(400).json({
            errMessage: message.errPermission
          });
        }
      } else {
        return res.status(400).json({
          errMessage: message.errLogin
        });
      }
    }
  };
}

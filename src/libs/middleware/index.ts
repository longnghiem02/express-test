import { RequestHandler } from "express";
import { jwtDecode } from "../jwt";
import { needLoginPaths, needRolePaths, nonSecurePaths } from "../../configs/constant";

export function checkRoute(): RequestHandler {
  return (req, res, next) => {
    if (nonSecurePaths.includes(req.path)) {
      return next();
    }
    
    else if (needLoginPaths.includes(req.path)) {
      const token = req.body.jwt;
      if (token) {
        next();
      } else {
        return res.status(400).json({
          errMessage: `You must login`
        });
      }
    }
    
    else if (needRolePaths.includes(req.path)) {
      const token = req.body.jwt;
      if (token) {
        const result = jwtDecode(token, "secret");
        if (result.role === "admin") {
          next();
        } else {
          return res.status(400).json({
            errMessage: `You don't have permission`
          });
        }
      } else {
        return res.status(400).json({
          errMessage: `You must login`
        });
      }
    } 
  };
}

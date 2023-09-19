import express from "express";
import { UserController } from "./user.controller";
import dtoValidationMiddleware from "../../libs/middleware/dto.validate";
import { UserLoginDTO, UserSignUpDTO } from "./user.dto";

const userController = new UserController();
export const userRouter = express.Router();

userRouter.post(
  "/api/sign-up",
  dtoValidationMiddleware(UserSignUpDTO),
  userController.userSignUp
);
userRouter.post(
  "/api/login",
  dtoValidationMiddleware(UserLoginDTO),
  userController.userLogIn
);

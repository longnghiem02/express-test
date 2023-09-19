import { loginCondition, signUpCondition, userData } from "./user.types";
import { UserService } from "./user.services";

const userServices = new UserService()

export class UserController {
  userSignUp = async (req: any, res: any) => {
    const condition: signUpCondition = {
      username: req.body.username
    };
    const data: userData = req.body
    const result = await userServices.handleSignUp(condition, data);
    res.status(200).json(result);
  };

  userLogIn = async (req: any, res: any) => {
    const condition: loginCondition = {
      username: req.body.username,
      password: req.body.password
    };
    const result = await userServices.handleLogIn(condition);
    res.status(200).json(result);
  };
}

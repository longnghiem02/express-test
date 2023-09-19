import { loginCondition, signUpCondition, userData } from "./user.types";
import { UserRepository } from "./user.repository";
import { jwtEncrypt } from "../../libs/jwt";
import { message, jwtKey } from "../../configs/constant";
import {
  HTTPResponse,
  responseData,
  responseError
} from "../../libs/types/HTTPResponse.type";

const userRepository = new UserRepository();

export class UserService {
  handleSignUp = async (
    condition: signUpCondition,
    data: userData
  ): Promise<HTTPResponse> => {
    try {
      const response = userRepository.findOrInsert(condition, data);
      if (!response) {
        return responseError(message.errServer);
      }
      return responseData(message.ok, response);
    } catch (error) {
      return responseError(error);
    }
  };

  handleLogIn = async (condition: loginCondition): Promise<HTTPResponse> => {
    try {
      const response = await userRepository.findOneBy(condition);
      if (response) {
        const token = jwtEncrypt(
          { id: response.id, role: response.role },
          jwtKey
        );
        return responseData(message.ok, token);
      }
      return responseError(message.errAccountExist);
    } catch (error) {
      return responseError(error);
    }
  };
}

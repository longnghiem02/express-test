import { loginCondition, signUpCondition, userData } from "./user.types";
import { UserRepository } from "./user.repository";
import { jwtEncrypt } from "../../libs/jwt";
// import { config } from "dotenv";
// config({ path: (process.cwd(), ".env") });

// const jwtPrivateKey = process.env.JWT_PRIVATE_KEY

export class UserService extends UserRepository {
  constructor() {
    super();
  }

  handleSignUp = (condition: signUpCondition, data: userData) => {
    const response = this.findOrInsert(condition, data);
    if (!response) {
      return {
        errMessage: "error!"
      };
    }
    return response;
  };

  handleLogIn = async (condition: loginCondition) => {
    const response = await this.findOneBy(condition);
    if (response) {
      const token = jwtEncrypt({ id: response.id, role: response.role }, "secret")
      return token;
    }
    return {
      errMessage: "Account not exits!"
    };
  };
}

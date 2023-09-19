export const nonSecurePaths: string[] = ["/api/sign-up", "/api/login", "/api/send-notification"];

export const needLoginPaths: string[] = ["/api/change-state-task"];

export const needRolePaths: string[] = ["/api/create-task", "/api/assign-task"];

export const jwtKey = "secret";

export const role = {
  admin: "admin",
  member: "member"
};

export const message = {
  errLogin: "You must login to do that!",
  errPermission: `You don't have permission!`,
  errAccountExist: "Account is not exits!",
  errServer: "Error from server!",
  ok: "OK",
  notFound: "Not found!"
};

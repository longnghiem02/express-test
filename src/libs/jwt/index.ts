import jwt from "jsonwebtoken";

export function jwtEncrypt (data: object, key: string) {
  const encrypted: string = jwt.sign(data, key);
  return encrypted
}

export function jwtDecode (token: string, key: string) {
  const decoded: any = jwt.verify(token, key);
  return decoded
}
export type TokenType = {
  _id: string;
  isAdmin?: boolean;
  email: string;
  exp: number;
  iat: number;
};

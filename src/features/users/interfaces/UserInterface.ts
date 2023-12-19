interface UserInterface {
  _id: string;
  email: string;
  isAdmin?: true;
  password?: string;
  loginCount?: number;
}

export interface logedInUser {
  email: string;
  _id: string;
}

export interface loginUser {
  email: string;
  password: string;
}

export interface SignUpUser {
  email: string;
  password: string;
  isAdmin: boolean;
}
export default UserInterface;

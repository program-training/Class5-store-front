interface UserInterface {
  _id: string;
  email: string;
  admin?: true;
  password?: string;
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
  password: string;
  initialPassword: string;
  email: string;
}
export default UserInterface;

<<<<<<< HEAD
interface UserInterface {
  _id: string;
  email: string;
  isAdmin?: true;
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
  email: string;
  password: string;
  isAdmin: boolean;
}
export default UserInterface;
=======
interface UserInterface {
  _id: string;
  email: string;
  isAdmin?: true;
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
>>>>>>> acc98a17e7c3d9fdbc16a561a0b091def3e2d3d8

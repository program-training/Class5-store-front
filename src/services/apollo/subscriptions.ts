import { gql } from "@apollo/client";

export const USERS_SUBSCRIPTION = gql`
  subscription UserRegister {
    userRegister {
      _id
      email
      isAdmin
      loginCount
    }
  }
`;

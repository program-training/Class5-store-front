import { gql } from "@apollo/client";

export const USERS_SUBSCRIPTION = gql`
  subscription UserCreated {
    userCreated {
      _id
      email
      isAdmin
      password
      loginCount
    }
  }
`;

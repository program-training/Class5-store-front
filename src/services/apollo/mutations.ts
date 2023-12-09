import { gql } from "@apollo/client";

export const MUTATIONS_USER_SIGNUP = gql`
  query SignUpUser($SignUpUserInput: RegisterUserInput) {
    signUpUser(input: $SignUpUserInput) {
      email
      password
      isAdmin
    }
  }
`;

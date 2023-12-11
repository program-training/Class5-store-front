import { gql } from "@apollo/client";

export const MUTATIONS_USER_SIGNUP = gql`
  mutation SignUpUser($input: RegisterUserInput) {
    signUpUser(input: $input) {
      email
      isAdmin
    }
  }
`;
export const MUTATIONS_USER_SIGNIN = gql`
  mutation SignInUser($input: LoginUserInput) {
    SignInUser(input: $input) {
      token
    }
  }
`;

export const MUTATION_CANCEL = gql`
  mutation CancelProductsInStock($cart: [ProductToCheck!]) {
    cancelProductsInStock(cart: $cart)
  }
`;
export const MUTATION_CHECK_IN_STOCK = gql`
  mutation CheckProductsInStock($cart: [ProductToCheck!]) {
    checkProductsInStock(cart: $cart) {
      inStock {
        productId
        requiredQuantity
      }
      notInStock {
        product {
          id
          name
          salePrice
          quantity
          description
          category
          discountPercentage
          imageUrl
          imageAlt
        }
        requiredQuantity
      }
    }
  }
`;

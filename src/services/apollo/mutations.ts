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
export const REGISTER_ORDER = gql`
  mutation RegisterOrder($order: OrderFromClient!) {
    registerOrder(order: $order) {
      _id
      cartItems {
        description
        price
        name
        productId
        quantity
      }
      orderTime
      price
      shippingDetails {
        address
        contactNumber
        orderType
      }
      status
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

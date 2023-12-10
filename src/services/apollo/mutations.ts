import { gql } from "@apollo/client";

export const MUTATION_CANCEL = gql`
  mutation CancelProductsInStock($cart: [CheckQuantity!]) {
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

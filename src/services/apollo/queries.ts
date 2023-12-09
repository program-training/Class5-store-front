import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query GetProducts {
    getProducts {
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
  }
`;
export const QUERY_PRODUCT = gql`
  query GetProduct($getProductId: ID) {
    getProduct(id: $getProductId) {
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
  }
`;
export const QUERY_USER_SIGNUP = gql`
  query RegisterUserInput($getProductId: ID) {
    getProduct(id: $getProductId) {
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
  }
`;

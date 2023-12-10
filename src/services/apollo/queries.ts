import { gql } from "@apollo/client";

export const QUERY_ORDERS = gql`
  query Order {
    getOrder {
      _id
      price
      shippingDetails {
        userId
        contactNumber
      }
    }
  }
`;

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

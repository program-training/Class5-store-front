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

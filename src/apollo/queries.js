import { gql } from "apollo-boost";

export const GET_ISSUES = gql`
  query issues {
    repository(owner: "facebook", name: "react") {
      issues(
        first: 5
        states: OPEN
        orderBy: { direction: DESC, field: CREATED_AT }
      ) {
        edges {
          node {
            title
            url
            updatedAt
          }
        }
      }
    }
  }
`;

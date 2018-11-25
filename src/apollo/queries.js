import { gql } from 'apollo-boost';

export const GET_ISSUES = gql`
  query issues {
    repository(owner: "facebook", name: "react") {
      issues(first: 20, orderBy: { direction: DESC, field: CREATED_AT }) {
        edges {
          node {
            id
            state
            title
            url
            updatedAt
            body
            isOpen @client
          }
        }
      }
    }
  }
`;

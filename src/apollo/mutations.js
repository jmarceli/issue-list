import { gql } from 'apollo-boost';

export const TOGGLE_ISSUE = gql`
  mutation toggleIssue($id: String!) {
    toggleIssue(id: $id) @client
  }
`;

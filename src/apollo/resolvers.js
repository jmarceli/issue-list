import { gql } from 'apollo-boost';

const resolvers = {
  Mutation: {
    toggleIssue: (_, { id: issueId }, { cache, getCacheKey }) => {
      const id = `Issue:${issueId}`;
      const fragment = gql`
        fragment openedIssue on Issue {
          id
          title
          url
          updatedAt
          state
          body
          isOpen
        }
      `;
      const issue = cache.readFragment({ id, fragment });
      const data = { ...issue, isOpen: !issue.isOpen };
      cache.writeData({ id, data });
      return null;
    },
  },
  Issue: {
    // initial state - required in case of merged local state
    isOpen: () => false,
  },
};

export default resolvers;

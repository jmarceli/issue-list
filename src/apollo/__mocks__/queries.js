import { GET_ISSUES } from '../queries';

export const GET_ISSUES_MOCK = {
  request: {
    query: GET_ISSUES,
  },
  result: {
    data: {
      repository: {
        issues: {
          edges: new Array(20).fill(0).map((edge, index) => ({
            node: {
              id: `${index + 1}MDU6SXNzdWUxNTU3NzYyMzE=`,
              title: `Title ${index + 1}`,
              url: `https://github.com/facebook/react/issues/${index + 1}`,
              updatedAt: `2018-11-${index + 10}T06:35:21Z`,
              state: index % 2 === 0 ? 'OPEN' : 'CLOSED',
              body: `Some issue body for issue no. ${index + 1}`,
              isOpen: index % 5 === 0,
            },
          })),
        },
      },
    },
  },
};

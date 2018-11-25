import { GET_ISSUES } from "../queries";

export const GET_ISSUES_MOCK = {
  request: {
    query: GET_ISSUES
  },
  result: {
    data: {
      repository: {
        issues: {
          edges: [
            {
              node: {
                title: "first",
                url: "https://github.com/facebook/react/issues/1",
                updatedAt: "2018-11-25T06:35:21Z"
              }
            },
            {
              node: {
                title: "second",
                url: "https://github.com/facebook/react/issues/2",
                updatedAt: "2018-11-24T20:56:52Z"
              }
            },
            {
              node: {
                title: "third",
                url: "https://github.com/facebook/react/issues/3",
                updatedAt: "2018-11-25T09:21:23Z"
              }
            },
            {
              node: {
                title: "fourth",
                url: "https://github.com/facebook/react/issues/4",
                updatedAt: "2018-11-24T19:36:46Z"
              }
            },
            {
              node: {
                title: "fifth",
                url: "https://github.com/facebook/react/issues/5",
                updatedAt: "2018-11-24T18:32:04Z"
              }
            }
          ]
        }
      }
    }
  }
};

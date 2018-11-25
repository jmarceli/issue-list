import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: async operation => {
    // TODO: get token from user input
    const token = process.env.REACT_APP_GH_TOKEN;
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
});

export default client;

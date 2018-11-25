import ApolloClient from 'apollo-boost';
import resolvers from './resolvers';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    // TODO: get token from user input
    const token = process.env.REACT_APP_GH_TOKEN;
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  clientState: {
    resolvers,
  },
});

export default client;

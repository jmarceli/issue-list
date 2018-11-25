import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../../apollo";

import App from "../App";

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Root;

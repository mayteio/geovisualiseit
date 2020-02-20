import React, { useEffect, useState } from "react";
import Auth from "@aws-amplify/auth";
import config from "../aws-exports";
import { createAppSyncLink } from "aws-appsync";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { useUser } from "../auth/AuthenticationProvider";
import { ApolloProvider } from "@apollo/react-hooks";
import { data } from "../graphql/schema.json";
import {
  IntrospectionFragmentMatcher,
  IntrospectionResultData
} from "apollo-boost";

const httpLink = createHttpLink({
  uri: config.aws_appsync_graphqlEndpoint
});

export const fragmentMatcher: IntrospectionFragmentMatcher = new IntrospectionFragmentMatcher(
  {
    introspectionQueryResultData: data as IntrospectionResultData
  }
);

const createClient = () => {
  const awsLink = createAppSyncLink({
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
      // @ts-ignore
      type: config.aws_appsync_authenticationType,
      credentials: () => Auth.currentCredentials(),
      jwtToken: async () =>
        (await Auth.currentSession()).getAccessToken().getJwtToken()
    },
    complexObjectsCredentials: () => Auth.currentCredentials()
  });

  return new ApolloClient({
    link: awsLink.concat(httpLink),
    cache: new InMemoryCache({ fragmentMatcher })
  });
};

export const GraphQLProvider: React.FC = ({ children }) => {
  const user = useUser();
  const [client, set] = useState<any>(createClient());

  console.log(user);

  // listen for user changes and set client
  useEffect(() => {
    set(createClient());
  }, [user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

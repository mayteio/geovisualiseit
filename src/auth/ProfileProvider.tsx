import React, { useEffect, useContext } from "react";
import { useUser } from "./AuthenticationProvider";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { gql, ApolloError } from "apollo-boost";
import { useSnackbarError } from "../common/useSnackbarError";

const ProfileContext = React.createContext(undefined);

/**
 * Grabs the user's profile stored in API, or creates it.
 */
export const ProfileProvider: React.FC = ({ children }) => {
  const user = useUser();
  const [getUser, { data, error, refetch, called }] = useLazyQuery(
    GetUserQuery,
    {
      // @ts-ignore
      variables: { id: user?.attributes?.sub }
    }
  );

  useEffect(() => {
    if (user && !data) {
      getUser();
    }
  }, [user, data, getUser]);

  const [createUser] = useMutation(CreateUserMutation);
  useSnackbarError<ApolloError>(
    error,
    "There was an error loading your profile"
  );

  useEffect(() => {
    if (user && data && !data.getUser) {
      createUser({
        variables: {
          input: {
            // @ts-ignore
            id: user?.attributes?.sub,
            // @ts-ignore
            username: user?.username
          }
        }
      })
        .then(() => refetch())
        .catch((error: ApolloError) => console.log(error));
    }
  }, [data, refetch, createUser, user, called]);

  return (
    <ProfileContext.Provider value={data?.getUser}>
      {children}
    </ProfileContext.Provider>
  );
};

const GetUserQuery = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      visualisations {
        items {
          id
          title
          description
          image {
            key
            region
            bucket
          }
        }
      }
    }
  }
`;

const CreateUserMutation = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) throw Error("Not inside <ProfileProvider />");
  return context;
}

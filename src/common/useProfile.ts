import { useUser } from "../auth/AuthenticationProvider";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export function useProfile() {
  const user = useUser();
  console.log(user);
  const { data } = useQuery(getProfileQuery, { variables: "", skip: !"" });

  return data;
}

export const getProfileQuery = gql`
  query GetProfile($id: ID!) {
    title
    visualisations {
      id
      title
      image
    }
  }
`;

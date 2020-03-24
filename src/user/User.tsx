import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../auth/AuthenticationProvider";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Header } from "../common/Header";
import { Box, Button, Grid, Typography, Container } from "@material-ui/core";
import { VisualisationTile } from "../common/VisualisationTile";
import { DeleteVisualisationButton } from "../common/DeleteVisualisationButton";
import { Empty } from "./Empty";

export const User = () => {
  const { usernameParam } = useParams();
  const isMe = usernameParam === "me";
  const user = useUser();
  const usernameVariable =
    // @ts-ignore
    isMe ? user?.username : usernameParam;

  const { data, loading, refetch } = useQuery(GetUserQuery, {
    variables: { filter: { username: { eq: usernameVariable } } },
    skip: !usernameVariable
  });

  const visualisations = data?.listUsers?.items[0]?.visualisations.items;

  return (
    <>
      <Header />
      <Box mt={8}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2">@{usernameVariable}</Typography>
            </Grid>
            {!visualisations?.length && !loading ? (
              <Empty isMe={isMe} />
            ) : (
              visualisations?.map((visualisation: any) => {
                return (
                  <Grid item xs={6} key={visualisation.id}>
                    <VisualisationTile
                      visualisation={visualisation}
                      actions={
                        <>
                          {isMe && <Button>Edit</Button>}
                          {isMe && (
                            <DeleteVisualisationButton
                              visualisation={visualisation}
                              onDelete={refetch}
                            />
                          )}
                          {!isMe && <Button>Fork</Button>}
                        </>
                      }
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export const GetUserQuery = gql`
  query ListUsers($filter: ModelUserFilterInput!) {
    listUsers(filter: $filter) {
      items {
        id
        username
        visualisations {
          items {
            id
            title
            description
            image {
              key
              identityId
            }
          }
        }
      }
    }
  }
`;

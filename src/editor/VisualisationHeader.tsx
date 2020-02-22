import React from "react";
import { useUser } from "../auth/AuthenticationProvider";
import { useSelector } from "react-redux";
import { Box, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const VisualisationHeader = () => {
  const user = useUser();
  const history = useHistory();
  // @ts-ignore
  const { visualisation } = useSelector(state => state.app);
  return (
    <Box display="flex" p={2} bgcolor="background.default">
      <Box flexGrow={1}>
        <Typography variant="h6">{visualisation?.title}</Typography>
      </Box>
      <Button
        onClick={() => history.push(`/v/${visualisation?.id}/edit`)}
        size="small"
      >
        Share
      </Button>
      {//
      // @ts-ignore
      user?.attributes.sub === visualisation?.user?.id ? (
        <Button
          onClick={() => history.push(`/v/${visualisation?.id}/edit`)}
          size="small"
        >
          Edit
        </Button>
      ) : (
        <Button size="small">Fork</Button>
      )}
    </Box>
  );
};

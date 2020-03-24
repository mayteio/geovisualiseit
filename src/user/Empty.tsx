import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface EmptyProps {
  isMe?: boolean;
}

export const Empty: React.FC<EmptyProps> = ({ isMe }) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom color="secondary">
        No visualisations to show
      </Typography>
      {isMe && (
        <Button
          component={Link}
          to="/v/new"
          variant="contained"
          color="primary"
        >
          Go make one
        </Button>
      )}
      <Button component={Link} to="/browse" style={{ marginLeft: 16 }}>
        Find some inspiration
      </Button>
    </Box>
  );
};

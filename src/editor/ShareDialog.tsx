import React from "react";
import { useRouteMatch, useParams, useHistory } from "react-router-dom";
import { Dialog, DialogTitle } from "@material-ui/core";

export const ShareDialog: React.FC = () => {
  const match = useRouteMatch("/v/:visualisationId/share");
  const { visualisationId } = useParams();
  const history = useHistory();

  return (
    <Dialog
      open={Boolean(match)}
      onClose={() => history.push(`/v/${visualisationId}`)}
    >
      <DialogTitle>Share this visulisation</DialogTitle>
    </Dialog>
  );
};

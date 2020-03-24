import React from "react";
import { S3Image } from "aws-amplify-react";
import { Typography, Box, Divider } from "@material-ui/core";

interface VisualisationTileProps {
  visualisation: any;
  onClick?: (visualisation: any) => void;
  actions?: React.ReactNode | React.ReactNode[];
}

export const VisualisationTile: React.FC<VisualisationTileProps> = ({
  visualisation,
  onClick,
  actions
}: any) => {
  return (
    <>
      <Box onClick={onClick}>
        <S3Image
          key={visualisation.image.key}
          identityId={visualisation.image.identityId}
          level="protected"
        />
      </Box>
      <Box display="flex">
        <Typography variant="h5">{visualisation.title}</Typography>

        <Box marginLeft="auto">{actions}</Box>
      </Box>
      <Divider />
    </>
  );
};

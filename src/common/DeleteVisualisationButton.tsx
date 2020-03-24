import React, { useState } from "react";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { deleteVisualisation as deleteVisualisationMutation } from "../graphql/mutations";
import { useSnackbar } from "notistack";

interface DeleteVisualisationButtonProps extends ButtonProps {
  visualisation: any;
  onDelete: () => void;
}

export const DeleteVisualisationButton: React.FC<DeleteVisualisationButtonProps> = ({
  visualisation,
  onDelete,
  ...props
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [dialogOpen, setDialogOpen] = useState(false);
  const onClose = () => setDialogOpen(false);
  const [deleteVisualisation] = useMutation(gql(deleteVisualisationMutation));
  const handleDelete = async () => {
    try {
      await deleteVisualisation({
        variables: { input: { id: visualisation.id } }
      });
      enqueueSnackbar(`${visualisation.title} was deleted.`);
      onClose();
      onDelete();
    } catch (error) {
      enqueueSnackbar(`There was an error deleting ${visualisation.title}`);
      onClose();
      console.log(error);
    }
  };

  return (
    <>
      <Button {...props} onClick={() => setDialogOpen(true)}>
        Delete
      </Button>
      <Dialog open={dialogOpen} onClose={onClose}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          Once you delete this visualisation, you'll still be able to access
          your datasets.
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Delete for real
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

import { useEffect } from "react";
import { useSnackbar } from "notistack";

export function useSnackbarError<TError = Error>(
  error: TError | undefined,
  message: string = "There was an error"
) {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (error) {
      console.log(error);
      enqueueSnackbar(message, { variant: "error" });
    }
  }, [error, message, enqueueSnackbar]);
}

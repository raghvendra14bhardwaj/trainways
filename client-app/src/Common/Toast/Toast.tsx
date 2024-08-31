import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { dispatcher, selector } from "../../Store/Hooks";
import { showToast } from "../../Store/Slices/Toast/Toast";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Toast: React.FC = () => {
  //type= success | error | warning | info

  const dispatch = dispatcher();
  const toastStore = selector((state: any) => state.toast);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      showToast({
        msg: "",
        open: false,
      })
    );
  };

  return (
    <Snackbar
      open={toastStore.open}
      autoHideDuration={toastStore.duration}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={toastStore.type}
        sx={{ width: "100%" }}
      >
        {toastStore.msg}
      </Alert>
    </Snackbar>
  );
};

export default Toast;

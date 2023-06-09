import { Button } from '@mui/material';
import { useSnackbar, VariantType } from 'notistack';
import React from 'react';

export interface ToastAction {
  textButton: string;
  action: () => void;
}

let useSnackbarRef: any;
export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const snackbar = {
  success(msg: string, autoHideDuration?: number, action?: ToastAction) {
    this.toast(msg, 'success', autoHideDuration, action);
  },
  warning(msg: string, autoHideDuration?: number, action?: ToastAction) {
    this.toast(msg, 'warning', autoHideDuration, action);
  },
  info(msg: string, autoHideDuration?: number, action?: ToastAction) {
    this.toast(msg, 'info', autoHideDuration, action);
  },
  error(msg: string, autoHideDuration?: number, action?: ToastAction) {
    this.toast(msg, 'error', autoHideDuration, action);
  },
  toast(
    msg: string,
    variant: VariantType = 'default',
    autoHideDuration: number = 3000,
    actionToast?: ToastAction
  ) {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant,
      autoHideDuration: autoHideDuration || 3000,
      action: actionToast ? (
        <Button
          color="primary"
          size="small"
          onClick={() => actionToast.action()}
        >
          {actionToast.textButton}
        </Button>
      ) : undefined,
    });
  },
};

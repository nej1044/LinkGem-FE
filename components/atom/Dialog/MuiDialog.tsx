import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IMuiDialog {
  dialogContext: {
    handleDialog: () => void;
    title: string;
    context: string;
    isOpen: boolean;
  };
}

function MuiDialog({ dialogContext }: IMuiDialog) {
  console.log('야호');
  const handleClose = () => {
    console.log('여기');
    console.log(dialogContext);
    dialogContext.handleDialog();
  };
  return (
    <div>
      <Dialog
        open={dialogContext.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogContext.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContext.context}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MuiDialog;

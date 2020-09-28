import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useStyles } from '../../styles/Dialog';

export interface Props {
  open: boolean;
  handleClose: () => void;
  videoId: string;
};

const Component = ({ open, handleClose, videoId }: Props) => (
  <Dialog onClose={handleClose} maxWidth="md" fullWidth aria-labelledby="simple-dialog-title" open={open}>
    <DialogContent classes={useStyles()}>
      <iframe
        title="Youtube video dialog"
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

    </DialogContent>
  </Dialog>
);

export default Component;

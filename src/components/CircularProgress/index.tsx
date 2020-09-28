import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from '../../styles/CircularProgress';

const Component = () => (
  <CircularProgress classes={useStyles()} size={80} thickness={2} />
);

export default Component;

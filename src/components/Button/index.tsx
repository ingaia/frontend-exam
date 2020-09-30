import React from 'react';
import Button from '@material-ui/core/Button';

import { useStyles } from '../../styles/Button';

export interface Props {
  children: any,
  type?: "button" | "reset" | "submit",
  fullWidth?: boolean,
  noborders?: boolean,
  onClick?: any
}

const Component = ({children, noborders, ...props }: Props) => (
  <Button
    {...props}
    classes={useStyles({ noBorders: noborders })}>
    {children}
  </Button>
);

export default Component;

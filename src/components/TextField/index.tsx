import React from 'react';
import TextField from '@material-ui/core/TextField';

import { inputStyles, labelStyles } from '../../styles/TextField';

export interface Props {
  fullWidth?: boolean,
  id: string,
  type?: string,
  label: string,
  value?: string,
  onChange?: any;
}

const Component = (props: Props) => (
  <TextField
    {...props}
    InputProps={{
      classes: inputStyles()
    }}
    InputLabelProps={{
      classes: labelStyles()
    }}
  />
);

export default Component;

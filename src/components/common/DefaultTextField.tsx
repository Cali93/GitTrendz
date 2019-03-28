import * as React from 'react';
import { TextField } from '@material-ui/core';

interface IDefaultTextFieldProps {
  name: string;
  value: any;
  onChange: any;
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  hidden?: boolean;
  required?: boolean;
  multiline?: boolean;
  rowsMax?: string;
  classes?: {
    input?: string;
    label?: string;
  };
}

export const DefaultTextField: React.FunctionComponent<IDefaultTextFieldProps> = ({
  id,
  label,
  placeholder,
  name,
  value,
  type,
  onChange,
  hidden,
  required,
  multiline,
  rowsMax,
  classes
}) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      className={classes.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      hidden={hidden}
      required={required}
      multiline={multiline}
      rowsMax={rowsMax}
      margin="normal"
      variant="outlined"
      fullWidth
      InputLabelProps={{
        shrink: true,
        className: classes.label
      }}
    />
  );
};
import * as React from "react";
import TextField from "@mui/material/TextField";
export default function InputType(props) {
  return (<div>
    <TextField
      label={props.label}
      name = {props.name}
      color={props.color}
      helperText={props.helperText}
      error={props.error}
      onChange={(e) => props.handleChange(e)}
      inputProps={props.inputProps}
      focused={props.focused}
      margin='dense'
      value = {props.values}
      required={props.required}
    />
    </div>
  );
}

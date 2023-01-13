import * as React from "react";
import TextField from "@mui/material/TextField";
export default function InputTypeField({
  label,
  name,
  color,
  helperText,
  error,
  handleChange,
  inputProps,
  focused,
  margin,
  values,
  required,
  placeholder
}) {
  return (
    <div>
      <TextField
        label={label}
        name={name}
        color={color}
        helperText={helperText}
        error={error}
        onChange={(e) => handleChange(e)}
        inputProps={inputProps}
        focused={focused}
        margin={margin}
        value={values}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

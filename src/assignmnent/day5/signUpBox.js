import "./signUpBox.css";
import * as React from "react";
import { Box } from "@mui/system";
import InputType from "./textField";
import BasicButtons from "./button";
import { useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SimpleSnackbar from "./snackbar";
import YouTube from "../day4/youtube";

export default function SignUpBox() {
  const initialValues = {
    Username: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);
  let [submitClicked, setSubmitClicked] = useState(1);
  let username = "Username";
  let email = "Email";
  let password = "Password";
  let confirmPasswordLabel = "Confirm Password";
  let confirmPassword = "Confirm_Password";
  let required = true;
  let helperTextUsername = "Enter unique name";
  let helperTextEmail = "Enter Valid Email";
  let helperTextPassword = "Between 4 to 15 characters";
  let labelForCheckbox = "I agree to the Terms & Conditions";
  let status = "primary";
  let inputPropsUsername = {
    maxLength: 12,
  };
  let inputPropsEmail = {
    type: "email",
  };
  let inputPropsPassword = {
    maxLength: 15,
    minLength: 4,
    type: "password",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(submitClicked++);
    console.log(formValues);
  };

  const handleChangeCheck = (e) => {
    console.log(e.target.checked);
    setIsDisabled(false);
  };

  return (
    <Box className="signUpContainer">
    <div className="form">
      <YouTube />
      <div className="labelDiv">
        <form onSubmit={handleSubmit}>
          <InputType
            label={username}
            name={username}
            helperText={helperTextUsername}
            color={status}
            inputProps={inputPropsUsername}
            handleChange={handleChange}
            focused={formValues.Username ? true : false}
            values={formValues.Username}
            required={required}
          />
          <InputType
            label={email}
            name={email}
            helperText={helperTextEmail}
            color={status}
            inputProps={inputPropsEmail}
            handleChange={handleChange}
            focused={formValues.Email ? true : false}
            values={formValues.Email}
            required={required}
          />
          <InputType
            label={password}
            name={password}
            helperText={helperTextPassword}
            color={status}
            inputProps={inputPropsPassword}
            handleChange={handleChange}
            focused={formValues.Password ? true : false}
            values={formValues.Password}
            required={required}
          />
          <InputType
            label={confirmPasswordLabel}
            name={confirmPassword}
            helperText={helperTextPassword}
            color={status}
            inputProps={inputPropsPassword}
            handleChange={handleChange}
            focused={formValues.Confirm_Password ? true : false}
            values={formValues.Confirm_Password}
            required={required}
          />
          <div className="checkBox">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={labelForCheckbox}
                onChange={handleChangeCheck}
              />
            </FormGroup>
          </div>
          <div>
            <BasicButtons title="Sign Up" disabled={isDisabled} />
          </div>
        </form>
        </div>
        </div>
      <SimpleSnackbar submitClicked={submitClicked} />
    </Box>
  );
}

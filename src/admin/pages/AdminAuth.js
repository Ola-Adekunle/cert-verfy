import React, { useState, useContext } from "react";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validators";
import Card from "../../shared/components/UIElements/Card";
import { AdminAuthContext } from "../../shared/context/admin-auth-context";

import "./AdminAuth.css";

const Auth = () => {
  const adminAuth = useContext(AdminAuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      staffID: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          email: undefined,
        },
        formState.inputs.staffID.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          email: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    } //This must run before we switch the mode.

    setIsLoginMode((prevMode) => !prevMode); //the function form of updating a state i.e switching from true to false  automatically.
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    adminAuth.login();
  };

  return (
    <Card className="authentication admin-container">
      <h2>{isLoginMode ? "LOGIN" : "SIGN-UP"}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <React.Fragment>
            <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name."
            onInput={inputHandler}
          />
          <Input
            id="email"
            element="input"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your email"
            onInput={inputHandler}
          />
          </React.Fragment>
        )}
        <Input
          id="staffID"
          element="input"
          type="text"
          label="staff-ID"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(7)]}
          errorText="Please enter your id"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGN-UP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGN-UP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Auth;

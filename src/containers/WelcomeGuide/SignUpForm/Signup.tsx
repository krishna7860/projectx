import { Snackbar } from "@material-ui/core";
import React from "react";
import WarningIcon from "@material-ui/icons/Warning";
import { connect } from "react-redux";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { ErrorLayout, ErrorSpan } from "../../../components/Stepper/styles";
// import StrikedText from "../../../components/StrikedText/StrikedText";
import useGenericState from "../../../Library/useGenericState";
import { setFormValues, setShowWelcomeModal, signupUser } from "../action";
import {
  Container,
  Header,
  InputContainer,
  Label,
  LabelContainer,
  Span,
  StyledCheckBox,
  SubHeader,
} from "./style";

const Signup = (props: any): JSX.Element => {
  const [state, setState] = useGenericState({
    username: "",
    password: "",
    confirmPassword: "",
    agree: false,
    showSnackBar: false,
    snackBarMessage: "",
  });

  const {
    username,
    password,
    agree,
    showSnackBar,
    snackBarMessage,
    confirmPassword,
  } = state;

  const handleSignup = () => {
    if (username === "" || password === "" || confirmPassword === "") {
      setState({
        showSnackBar: true,
        snackBarMessage: "Username and Password are Required",
      });
      return;
    }

    if (password !== confirmPassword) {
      setState({
        showSnackBar: true,
        snackBarMessage: "Password Didn't Matched",
      });
      return;
    }

    props.signupUser({ username: state.username, password: state.password });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ agree: event.target.checked });
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ showSnackBar: false });
  };
  return (
    <Container>
      <Header>Sign up for Tourx</Header>
      <SubHeader>
        Sign up using your email address or phone number below to get started.
      </SubHeader>
      <InputContainer>
        <Label>Email or phone number</Label>
        <Input
          placeholder="mail@mail.com or 91-XXXXXXXXXX"
          icon="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          onChange={(e) => setState({ username: e.target.value })}
        />
      </InputContainer>
      <InputContainer>
        <Label>Password</Label>
        <Input
          placeholder="Enter Password"
          type="password"
          icon="https://img.icons8.com/ios/452/password--v1.png"
          onChange={(e) => setState({ password: e.target.value })}
        />
      </InputContainer>
      <InputContainer>
        <Label>Remember Password</Label>
        <Input
          placeholder="Enter Password Again"
          type="password"
          icon="https://img.icons8.com/ios/452/password--v1.png"
          onChange={(e) => setState({ confirmPassword: e.target.value })}
        />
      </InputContainer>
      <LabelContainer>
        <StyledCheckBox onChange={handleChange} />
        <Span>I agree to the terms and conditions</Span>
      </LabelContainer>

      <Button disabled={!agree} type="primary" onClick={handleSignup}>
        Create Account
      </Button>

      {/* <StrikedText text="OR" />

      <Button type="outline" onClick={handleSignup}>
        Continue with Google
      </Button>
      <Button type="outline" onClick={handleSignup}>
        Continue with Apple
      </Button> */}
      <Snackbar
        open={showSnackBar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <ErrorLayout>
          <WarningIcon />
          <ErrorSpan>{snackBarMessage}</ErrorSpan>
        </ErrorLayout>
      </Snackbar>
    </Container>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  setFormValues,
  setShowWelcomeModal,
  signupUser,
})(Signup);

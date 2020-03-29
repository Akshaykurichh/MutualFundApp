/* eslint-disable default-case */
import React, { Component } from "react";
//import logo from "../logo.svg";
import { GoogleLogin, useGoogleLogin } from "react-google-login";
import { form } from "semantic-ui-react";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import FinanceDetails from "./FinanceDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      city: "",
      country: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.username !== state.firstName ||
      props.familyName !== state.lastName ||
      props.email !== state.email
    ) {
      return {
        firstName: props.username,
        lastName: props.familyName,
        email: props.email
      };
    } else return false;
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, age, city, country } = this.state;
    const values = { firstName, lastName, email, age, city, country };
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <AddressDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FinanceDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
    }
  }
}

export default MainForm;

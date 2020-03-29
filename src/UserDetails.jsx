// UserDetails.jsx
import React, { Component } from "react";
import { Form, Message, Input, Button, Select } from "semantic-ui-react";
import { isEmpty } from "lodash";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.values.firstName,
      lastName: props.values.lastName,
      email: props.values.email,
      error: false
    };
    console.log("props afre:", props);
  }

  saveAndContinue = e => {
    let { firstName, lastName, email } = this.state;
    e.preventDefault();
    console.log("firstname", firstName);
    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(email)) {
      this.setState({ error: true });
    } else {
      this.props.nextStep();
    }
  };
  handleErrorCheck = e => {
    console.log(e);
    // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //   fieldValidationErrors.email = emailValid ? '' : ' is invalid';
  };

  render() {
    const genderOptions = [
      { key: "m", text: "Male", value: "male" },
      { key: "f", text: "Female", value: "female" },
      { key: "o", text: "Other", value: "other" }
    ];
    const { values } = this.props;
    const { firstName, lastName, email, error } = this.state;
    return (
      <Form className="ui form">
        <h2 className="ui centered">Enter User Details</h2>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First name"
            defaultValue={firstName}
            disabled
            required
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last name"
            required
            disabled
            defaultValue={lastName}
          />
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{
              children: "Gender",
              htmlFor: "form-select-control-gender"
            }}
            placeholder="Gender"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
        </Form.Group>
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          defaultValue={email}
          disabled
          onChange={this.props.handleChange("email")}
          placeholder="joe@schmoe.com"
          required
          //error={this.handleErrorCheck}
          // error={{
          //   content: "Please enter a valid email address",
          //   pointing: "below"
          // }}
        />
        <Button variant="success" onClick={this.saveAndContinue}>
          Save And Continue{" "}
        </Button>
        {error && (
          <Message
            error
            header="Action Forbidden"
            content="Please fill the mandatory fields"
          />
        )}
      </Form>
    );
  }
}

export default UserDetails;

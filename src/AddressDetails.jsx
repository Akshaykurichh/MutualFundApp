// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class AddressDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <h2 className="ui centered">Enter Address Details</h2>
        <Form.Field>
          <label>Age: </label>
          <input
            placeholder="Age"
            onChange={this.props.handleChange("age")}
            defaultValue={values.age}
          />
        </Form.Field>
        <Form.Field>
          <label>City: </label>
          <input
            placeholder="City"
            onChange={this.props.handleChange("city")}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <label>State: </label>
          <input
            placeholder="State"
            onChange={this.props.handleChange("state")}
            defaultValue={values.state}
          />
          <Form.Field>
            <label>Address: </label>
            <input
              placeholder="StreetAddress and House Number"
              onChange={this.props.handleChange("street")}
              defaultValue={values.street}
            />
          </Form.Field>
        </Form.Field>
        <Form.Field>
          <label>Country: </label>
          <input
            placeholder="Country"
            onChange={this.props.handleChange("country")}
            defaultValue={values.country}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default AddressDetails;

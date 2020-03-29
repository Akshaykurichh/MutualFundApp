// PersonalDetails.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class FinanceDetails extends Component {
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
        <h1 className="ui centered">Enter Bank and Finance Related Details</h1>
        <Form.Field>
          <label>Monthly Income</label>
          <input
            placeholder="Monthly Income"
            onChange={this.props.handleChange("income")}
            defaultValue={values.income}
          />
        </Form.Field>
        <Form.Field>
          <label>Amount Intended For Investment</label>
          <input
            placeholder="Investment Amount"
            onChange={this.props.handleChange("investment")}
            defaultValue={values.investment}
          />
        </Form.Field>
        <Form.Field>
          <label>Account Number</label>
          <input
            placeholder="Account Number"
            onChange={this.props.handleChange("account")}
            defaultValue={values.account}
          />
        </Form.Field>
        <Form.Field>
          <label>IFSC Code</label>
          <input
            placeholder="IFSC Code"
            onChange={this.props.handleChange("ifsc")}
            defaultValue={values.ifsc}
          />
        </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default FinanceDetails;

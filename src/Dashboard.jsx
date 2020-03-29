// UserDetails.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    const { values } = this.props;
    return (
      <Form>
        <Form.Field>
          <label>Amount Invested is :Rs.{23000}</label>
        </Form.Field>
        <Form.Field>
          <label>Return Expected is : Rs.{27000}</label>
        </Form.Field>
        <Form.Field>
          <label>Return Recieved is :Rs.{26000}</label>
        </Form.Field>
      </Form>
    );
  }
}

export default Dashboard;

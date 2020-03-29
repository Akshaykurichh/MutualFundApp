// UserDetails.jsx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class ProfileDetails extends Component {
  render() {
    const { values } = this.props;
    const username = "Qwerty";
    const age = 25;
    const address = "24,Chicago,USA";
    const emailId = "qwerty@gmail.com";
    return (
      <Form>
        <Form.Field>
          <label>Name is :{username}</label>
        </Form.Field>
        <Form.Field>
          <label>Age is:{age}</label>
        </Form.Field>
        <Form.Field>
          <label>Address is:{address}</label>
        </Form.Field>
        <Form.Field>
          <label>Email Id is:{emailId}</label>
        </Form.Field>
      </Form>
    );
  }
}

export default ProfileDetails;

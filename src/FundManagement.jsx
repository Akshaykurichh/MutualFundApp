// UserDetails.jsx
import React, { Component } from "react";
import { Form, Checkbox, Button, Table, Label, Menu } from "semantic-ui-react";
import { map } from "lodash";
import Select from "react-select";

class FundManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundsAdded: []
    };
  }
  componentDidMount() {
    this.setState({ fundsAdded: this.props.fundsAdded });
  }
  addFunds = e => {
    let { fundsAdded } = this.state;
    fundsAdded.push("franklin");
    this.setState(fundsAdded);
  };
  render() {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];
    const fundsAvailable = [
      "Franklin: 10%",
      "Sbi: 8%",
      "AXIS: 4%",
      "Aditya Birla:14%"
    ];
    const { values } = this.props;
    const { fundsAdded } = { ...this.state };
    return (
      <div>
        <label>Select And Add Fund:</label>
        <Select
          value="--select--"
          onChange={this.handleChange}
          options={options}
        ></Select>
        <Form>
          <Form.Field>
            <label>Withdraw Funds:</label>
            <Table>
              <Table.Body>
                {map(fundsAdded, fund => {
                  return (
                    <Table.Row>
                      <Table.Cell>
                        <Checkbox checked onChange={this.handleCheck} />
                      </Table.Cell>
                      <Table.Cell>
                        <Label>{fund.name}</Label>
                      </Table.Cell>
                      <Table.Cell>
                        <Label>{fund.return}</Label>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Form.Field>
          <Button>Save And Continue </Button>
        </Form>
      </div>
    );
  }
}

export default FundManagement;

//onClick={this.props.updateFunds(fundsAdded)}>

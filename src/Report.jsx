// UserDetails.jsx
import React, { Component } from "react";
import { Form, Button, Table, Label } from "semantic-ui-react";

class Report extends Component {
  render() {
    const { values } = this.props;
    const username = "Qwerty";
    const age = 25;
    const address = "24,Chicago,USA";
    const emailId = "qwerty@gmail.com";
    return (
      <div>
        <Table>
          <Table.Header>
            <Table.HeaderCell>Share Name</Table.HeaderCell>
            <Table.HeaderCell>Invested Amount</Table.HeaderCell>
            <Table.HeaderCell>Expected Return</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label>FrankLin</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>23000</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>12%</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>2017</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label>Axis</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>12000</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>6%</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>2017</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label>ICICI</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>28000</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>11%</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>2017</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label>SBI</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>15000</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>10%</Label>
              </Table.Cell>
              <Table.Cell>
                <Label>2017</Label>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Report;

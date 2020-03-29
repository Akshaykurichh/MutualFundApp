// UserDetails.jsxx
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Dashboard from "./Dashboard";
import ProfileDetails from "./ProfileDetails";
import FundManagement from "./FundManagement";
import Report from "./Report";
import MainForm from "./MainForm";

export class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      loading: false
    };
  }
  // componentDidMount() {
  //   console.log("props firebase is:", this.props.firebase.users());
  //   this.props.firebase.users().on("value", snapshot => {
  //     this.setState({
  //       users: snapshot.val(),
  //       loading: false
  //     });
  //   });
  //   console.log("state is:", this.state.users);
  // }
  render() {
    const { username, familyName, email, visible } = this.props;
    return visible ? (
      <div>
        <Tabs>
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>ProfileDetails</Tab>
            <Tab>Report</Tab>
            <Tab>FundManagement</Tab>
            <Tab>Update Information</Tab>
          </TabList>

          <TabPanel>
            <h2>
              <Dashboard />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <ProfileDetails />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <Report />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <FundManagement />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <MainForm
                username={username}
                familyName={familyName}
                email={email}
              />
            </h2>
          </TabPanel>
        </Tabs>
      </div>
    ) : null;
  }
}

import React, { Component } from "react";
import { Container, Grid, Menu } from "semantic-ui-react";
import PendingPost from "./PendingPost";
import Report from "./Report";
import ListUser from "./ListUser";
import { data } from "./data"; // Data fetched

const contents = {
  PendingPost: <PendingPost />,
  Report: <Report />,
  ListUser: <ListUser />
};

class Admin extends Component {
  state = {
    activeItem: "PendingPost",
    currentContent: contents.PendingPost
  };
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, currentContent: contents[name] });
  render() {
    const { activeItem, currentContent } = this.state;
    return (
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical>
              <Menu.Item>
                <Menu.Header>Admin</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="PendingPost"
                    active={activeItem === "PendingPost"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="Report"
                    active={activeItem === "Report"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="ListUser"
                    active={activeItem === "ListUser"}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          {currentContent}
        </Grid>
      </Container>
    );
  }
}

export default Admin;

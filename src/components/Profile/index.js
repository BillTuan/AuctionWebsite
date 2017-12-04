import React, { Component } from "react";
import { Container, Grid, Menu, Button, Form } from "semantic-ui-react";
import { ContentList } from "./contentlist";

class Profile extends Component {
  state = { activeItem: "Profile", currentContent: ContentList.Profile };
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, currentContent: ContentList[name] });
  render() {
    const { activeItem, currentContent } = this.state;
    return (
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical>
              <Menu.Item>
                <Menu.Header>Your account</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="Profile"
                    active={activeItem === "Profile"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="Credit"
                    active={activeItem === "Credit"}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header> Auction History</Menu.Header>
                <Menu.Menu>
                  <Menu.Item
                    name="Completed"
                    active={activeItem === "Completed"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="Participating"
                    active={activeItem === "Participating"}
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

export default Profile;

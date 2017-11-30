import React, { Component } from "react";
import { Container, Segment, Grid, Menu, Divider } from "semantic-ui-react";


const ProfileDetail = () =>{
    return()
}

class Profile extends Component {
  state = { activeItem: "Profile detail" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
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

          <Grid.Column stretched width={12}>
            <Segment>
              This is an stretched grid column. This segment will always match
              the tab height
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Profile;

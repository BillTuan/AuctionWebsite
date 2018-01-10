import React, { Component } from "react";
import {
  Container,
  Grid,
  Menu,
  Button,
  Form,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import PendingPost from "./PendingPost";
import Report from "./Report";
import ListUser from "./ListUser";
const contents = {
  PendingPost: <PendingPost />,
  Report: <Report />,
  ListUser: <ListUser />
};

class Admin extends Component {
  state = {
    activeItem: "PendingPost",
    currentContent: contents.PendingPost,
    isLogin: false
  };
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, currentContent: contents[name] });
  render() {
    const { activeItem, currentContent } = this.state;
    return !this.state.isLogin ? (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://react.semantic-ui.com/logo.png" /> Log-in to
            your account
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button
                color="teal"
                fluid
                size="large"
                onClick={() => {
                  this.setState({ isLogin: true });
                }}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    ) : (
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

import React, { Component } from "react";
import {
  Menu,
  Container,
  Image,
  Button,
  Segment,
  Search
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as action from "../action";
class Header extends Component {
  state = { active: "home" };
  render() {
    return (
      <Segment stackable="true">
        <Menu inverted pointing color="teal">
          <Container>
            <Menu.Item header>
              <Link to="/">
                <Image
                  size="mini"
                  src="http://brandmark.io/logo-rank/random/apple.png"
                  style={{ marginRight: "1.5em", width: 30, height: 30 }}
                />
                Odun Auction
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/listing">List product</Link>
            </Menu.Item>

            {this.props.data === null ? (
              <Menu.Menu position="right">
                <Menu.Item>
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/signup">
                    <Button>Sign up</Button>
                  </Link>
                </Menu.Item>
              </Menu.Menu>
            ) : (
              <Menu.Menu position="right">
                <Menu.Item>
                  <Link to={`/profile/${this.props.data.data.id}`}>
                    <Button>Profile</Button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    onClick={() => this.props.signOut(this.props.history)}
                  >
                    Sign Out
                  </Button>
                </Menu.Item>
              </Menu.Menu>
            )}
          </Container>
        </Menu>
        <Menu borderless widths={1} inverted color="teal">
          <Search
            icon="search"
            size="massive"
            style={{ marginTop: 15, marginBottom: 15 }}
          />
        </Menu>
      </Segment>
    );
  }
}

export default connect(
  ({ authReducer }) => ({ data: authReducer.data }),
  action
)(withRouter(Header));

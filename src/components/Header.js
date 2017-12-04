import React, { Component } from "react";
import {
  Menu,
  Container,
  Dropdown,
  Image,
  Button,
  Segment,
  Search
} from "semantic-ui-react";

import { Link } from "react-router-dom";

class Header extends Component {
  state = { active: "home" };
  render() {
    return (
      <Segment stackable>
        <Menu inverted pointing color="teal">
          <Container>
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src="http://brandmark.io/logo-rank/random/apple.png"
                style={{ marginRight: "1.5em", width: 30, height: 30 }}
              />
              Odun Auction
            </Menu.Item>
            <Menu.Item as="a" active>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item as="a">
              <Link to="/listing">List product</Link>
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item>
                <Link to="/login">
                  <Button as="a">Login</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/signup">
                  <Button as="a">Sign up</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/profile/1">
                  <Button as="a">Profile</Button>
                </Link>
              </Menu.Item>
            </Menu.Menu>
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

export default Header;

import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../action";
class Login extends Component {
  state = { email: "", password: "" };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    this.props.signIn(email, password, this.props.history);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%", marginTop: 50 }}
          verticalAlign="top"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image
                src="http://brandmark.io/logo-rank/random/apple.png"
                style={{ marginRight: "1.5em", width: 35, height: 35 }}
              />{" "}
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  name="email"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  name="password"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => {
                    this.handleLogin();
                  }}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(() => ({}), action)(Login);

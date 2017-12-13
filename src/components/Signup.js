import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { regexPassword, regexEmail } from "../utils";
class Signup extends Component {
  state = {
    username: "",
    password: "",
    repassword: ""
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  validationForm = () => {
    const { username, password, repassword } = this.state;
    return (
      regexEmail.test(username) &&
      regexPassword.test(password) &&
      password === repassword
    );
  };
  handleSignup = () => {
    this.validationForm ? alert("Error") : alert("Success");
  };
  render() {
    const { username, password, repassword } = this.state;
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
              Create new account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  name="username"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={username}
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
                <Form.Input
                  name="repassword"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm password"
                  type="password"
                  value={repassword}
                  onChange={this.handleChange}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => {
                    this.handleSignup();
                  }}
                >
                  Sign up
                </Button>
              </Segment>
            </Form>
            <Message>
              If you are a member. Let's <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;

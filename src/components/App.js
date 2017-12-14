import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Route
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import Listing from "./Listing";
import Profile from "./Profile";
import Signup from "./Signup";
import Admin from "./Admin";
import NotFound from "./NotFound";
import * as action from "../action";
import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    const headers = JSON.parse(localStorage.getItem("headers"));
    if (headers) {
      this.props.getUserProfile(headers);
    }
  }

  renderRoute() {
    return this.props.data === null ? null : (
      <div>
        <Switch>
          <Route
            exact
            path="/product/:id"
            render={props => (
              <div>
                <Header />
                <Product {...props} />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/listing"
            render={props => (
              <div>
                <Header />
                <Listing {...props} editProduct={false} />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/profile/:username"
            render={() => (
              <div>
                <Header />
                <Profile />
                <Footer />
              </div>
            )}
          />
          <Route exact path="/admin" component={Admin} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    );
  }
  render() {
    console.log("Props", this.props);
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/login"
              render={props => (
                <div>
                  <Header />
                  <Login {...props} />
                  <Footer />
                </div>
              )}
            />
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Header />
                  <Home />
                  <Footer />
                </div>
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <div>
                  <Header />
                  <Signup {...props} />
                  <Footer />
                </div>
              )}
            />
            {this.renderRoute()}
            <Route render={() => <NotFound />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = ({ authReducer }) => {
  return { data: authReducer.data };
};
export default connect(mapStateToProps, action)(App);

import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
  _renderRouteAdmin() {
    return <Route exact path="/admin" component={Admin} />;
  }
  _renderRouteWithoutAuthRequire() {
    return (
      <Route
        exact
        path="/"
        render={props => (
          <div>
            <Header />
            <Home {...props} />
            <Footer />
          </div>
        )}
      />
    );
  }
  _renderRouteWithAuthRequire() {
    return (
      <Switch>
        <Route
          exact
          path="/signup"
          render={props => (
            <div>
              <Header />
              {this.props.data === null ? (
                <Signup {...props} />
              ) : (
                <Redirect to="/" />
              )}

              <Footer />
            </div>
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <div>
              <Header />
              {this.props.data === null ? (
                <Login {...props} />
              ) : (
                <Redirect to="/" />
              )}
              <Footer />
            </div>
          )}
        />
        <Route
          exact
          path="/product/:id"
          render={props => (
            <div>
              <Header />
              {this.props.data === null ? (
                <Redirect to="/login" />
              ) : (
                <Product {...props} />
              )}
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
              {this.props.data === null ? (
                <Redirect to="/login" />
              ) : (
                <Listing {...props} editProduct={false} />
              )}
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
              {this.props.data === null ? (
                <Redirect to="/login" />
              ) : (
                <Profile />
              )}
              <Footer />
            </div>
          )}
        />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this._renderRouteAdmin()}
          {this._renderRouteWithoutAuthRequire()}
          {this._renderRouteWithAuthRequire()}
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = ({ authReducer }) => {
  return { data: authReducer.data };
};
export default connect(mapStateToProps, action)(App);

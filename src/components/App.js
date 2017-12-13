import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/login"
            render={() => (
              <div>
                <Header />
                <Login />
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
          <Route
            exact
            path="/signup"
            render={() => (
              <div>
                <Header />
                <Signup />
                <Footer />
              </div>
            )}
          />
          <Route exact path="/admin" component={Admin} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

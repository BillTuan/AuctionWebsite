import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

//Route
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import Listing from "./Listing";
import Profile from "./Profile";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/listing" component={Listing} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/signup" component={Signup} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

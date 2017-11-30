import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

//Route
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Product from "./Product";
import Profile from "./Profile";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/profile/:username" component={Profile} />>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

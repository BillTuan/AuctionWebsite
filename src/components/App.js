import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

//Route
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

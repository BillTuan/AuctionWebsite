import React, { Component } from "react";
import { Image, Container } from "semantic-ui-react";
import Header from "./Header";
import Footer from "./Footer";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Image
          centered
          src="http://www.purpleclick.com/wp-content/uploads/2016/03/BP_Mar_404_Main.jpg"
        />
        <Footer />
      </div>
    );
  }
}

export default NotFound;

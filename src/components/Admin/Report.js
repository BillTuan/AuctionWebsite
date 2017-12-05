import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";

import { data } from "./data"; // Data fetch
class Report extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Divider horizontal>Pending Post</Divider>
      </Container>
    );
  }
}

export default Report;

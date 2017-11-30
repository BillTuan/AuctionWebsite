import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import CardProduct from "./CardProduct";
class Home extends Component {
  state = {};
  render() {
    return (
      <Grid columns="equal" padded>
        <Grid.Row>
          <Grid.Column style={{ marginLeft: 40 }}>
            <CardProduct />
          </Grid.Column>

          <Grid.Column>
            <CardProduct />
          </Grid.Column>

          <Grid.Column>
            <CardProduct />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;

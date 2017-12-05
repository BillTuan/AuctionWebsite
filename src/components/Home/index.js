import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardProduct from "./CardProduct";
import { connect } from "react-redux";
import * as action from "../../action";
import { chunk } from "../../utils";
class Home extends Component {
  state = {};
  componentDidMount() {
    this.props.getListProduct();
  }

  renderProducts() {
    const products = chunk(this.props.products, 3);

    return products.map(rowProduct => (
      <Grid.Row>
        {rowProduct.map(product => (
          <Grid.Column style={{ marginLeft: 40 }}>
            <CardProduct />
          </Grid.Column>
        ))}
      </Grid.Row>
    ));
  }
  render() {
    return (
      <Grid columns="equal" padded>
        {/* <Grid.Column style={{ marginLeft: 40 }}>
            <CardProduct />
          </Grid.Column>

          <Grid.Column>
            <CardProduct />
          </Grid.Column>

          <Grid.Column>
            <CardProduct />
          </Grid.Column> */}
        {this.renderProducts()}
      </Grid>
    );
  }
}
const mapStateToProps = ({ productReducer }) => {
  return {
    products: productReducer.products
  };
};
export default connect(mapStateToProps, action)(Home);
